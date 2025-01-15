import { useState, useEffect } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import './game.css';

const Wordle = () => {
  const [solution, setSolution] = useState(''); // The secret word
  const [guesses, setGuesses] = useState(Array(6).fill(null)); // Store the guesses
  const [currentGuess, setCurrentGuess] = useState(''); // The currently typed guess
  const [isGameOver, setIsGameOver] = useState(false); // If the game is over
  const [msg, setMsg] = useState('Try to guess the word');
  const [isError, setIsError] = useState(Array(6).fill(false)); // Track errors for each line
  const [testMode, setTestMode] = useState(true); // Enable or disable test mode

  const { selectedLanguage, languageData, userName } = Ctx(); // Get language and words from context
  const { selectedWords } = languageData; // The word list

  console.log(solution);
  // Random word picker
  const randomWord = () => {
    if (selectedWords && selectedWords.length > 0) {
      return selectedWords[Math.floor(Math.random() * selectedWords.length)];
    }
  };

  useEffect(() => {
    if (selectedWords && selectedWords.length > 0) {
      setSolution(randomWord());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedWords]);

  // Handle input and key events
  useEffect(() => {
    const handleType = (event) => {
      if (isGameOver) {
        return;
      }

      if (event.key === 'Enter' && currentGuess.length === 5) {
        if (testMode) {
          if (!selectedWords.includes(currentGuess)) {
            setMsg('This word is not in our List of Words');
            const currentIndex = guesses.findIndex((val) => val == null);
            if (currentIndex !== -1) {
              // Set error for the incorrect row
              const newErrorState = [...isError];
              newErrorState[currentIndex] = true;
              setIsError(newErrorState);
            }
            return;
          }
        } else {
          setIsError(Array(6).fill(false)); // Reset error when in test mode
        }

        const newGuesses = [...guesses];
        const currentIndex = guesses.findIndex((val) => val == null);

        if (currentIndex !== -1) {
          newGuesses[currentIndex] = currentGuess;
          setGuesses(newGuesses);
          setCurrentGuess('');
        }

        if (solution === currentGuess) {
          setIsGameOver(true);
          setMsg('You win! Good job! Restart and try another word.');
          // increase Win for Wordle
          const users = JSON.parse(localStorage.getItem('users'));

          if (users) {
            const user = users.find((val) => {
              return val.username === userName.toLowerCase();
            });
            user.wins++;
            localStorage.setItem('users', JSON.stringify(users)); // save the complete obj back to the localStorage
          }
        } else if (
          currentIndex === guesses.length - 1 &&
          solution !== currentGuess
        ) {
          setIsGameOver(true);
          setMsg(
            `Game over. The word was ${solution}. Restart for a new word.`
          );
          const users = JSON.parse(localStorage.getItem('users'));

          if (users) {
            const user = users.find((val) => {
              return val.username === userName.toLowerCase();
            });
            user.losses++;
            localStorage.setItem('users', JSON.stringify(users)); // save the complete obj back to the localStorage
          }
        }
      }

      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        setIsError(Array(6).fill(false));
        // Reset error state when backspacing
        if (currentGuess.length === 5 && testMode) {
          setMsg('Try to guess the word');
        }
      }

      if (
        currentGuess.length < 5 &&
        /^[a-záéíóöőúüűăâîşţ]{1}$/i.test(event.key)
      ) {
        setCurrentGuess((oldGuess) => oldGuess + event.key.toLowerCase());
      }
    };

    window.addEventListener('keydown', handleType);

    return () => window.removeEventListener('keydown', handleType);
  }, [
    currentGuess,
    isGameOver,
    solution,
    guesses,
    selectedWords,
    testMode,
    isError,
    userName,
  ]);

  const gameRestart = () => {
    setSolution(randomWord());
    setGuesses(Array(6).fill(null));
    setIsGameOver(false);
    setCurrentGuess('');
    setMsg('Try to guess the word');
    document.activeElement.blur(); // Removes focus from input
    setIsError(Array(6).fill(false)); // Reset the error state on restart
  };

  useEffect(() => {
    gameRestart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage]);

  return (
    <div className="board">
      <div style={{ textAlign: 'center' }}>
        <h3>
          {selectedLanguage}
          <br />
          {msg}
        </h3>
      </div>
      <div className="">
        {guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex((val) => val == null);
          return (
            <Line
              key={i}
              guess={isCurrentGuess ? currentGuess : guess ?? ''}
              isFinal={!isCurrentGuess && guess !== null}
              solution={solution}
              isError={isError[i]} // Pass the error state for each row
            />
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <input type="checkbox" onChange={() => setTestMode(!testMode)} />
        Test Mode(ignore our wordlist)
      </div>
      <div className="new-game-button-container">
        <button className="new-game-button" onClick={gameRestart}>
          Restart
        </button>
      </div>
    </div>
  );
};

const Line = ({ guess, isFinal, solution, isError }) => {
  const getCellClass = (guess, index, isFinal) => {
    if (!guess || guess[index] === null) {
      return 'cell'; // Default classname
    }

    if (isError) {
      return 'cell error';
    }

    if (!isFinal) {
      return 'cell'; // No colors unless the guess is finalized
    }

    const char = guess[index];
    const solutionCharCounts = {};

    // Count characters in the solution
    for (let ch of solution) {
      solutionCharCounts[ch] = (solutionCharCounts[ch] || 0) + 1;
    }

    // First pass: Mark correct positions (green)
    const exactMatches = Array(5).fill(false);
    for (let i = 0; i < 5; i++) {
      if (guess[i] === solution[i]) {
        exactMatches[i] = true;
        solutionCharCounts[guess[i]]--;
      }
    }

    // Second pass: Mark misplaced characters (yellow)
    if (exactMatches[index]) {
      return 'cell correct'; // Correct position
    } else if (solution.includes(char) && solutionCharCounts[char] > 0) {
      solutionCharCounts[char]--; // Decrement the count for misplaced matches
      return 'cell present'; // Correct character, wrong position
    } else {
      return 'cell absent'; // Character not in the solution
    }
  };

  return (
    <div className={`line ${isFinal ? 'final' : ''}`}>
      {Array(5) // Creating 5 cells (div)
        .fill('')
        .map((_, index) => {
          return (
            <div key={index} className={getCellClass(guess, index, isFinal)}>
              {guess ? guess[index] : ''}
            </div>
          );
        })}
    </div>
  );
};

export default Wordle;
