import { useState, useEffect } from 'react';
import { Ctx } from '../../../context/store';
import Line from './Line';
import './game.css';

const Wordle = () => {
  const [solution, setSolution] = useState('wordl'); // The secret word
  console.log(solution);

  const [guesses, setGuesses] = useState(Array(6).fill(null)); // [null, null, null, null, null, null]
  const [currentGuess, setCurrentGuess] = useState(''); // Currently typed in guess, not sent yet
  const [isGameOver, setIsGameOver] = useState(false);
  const { selectedLanguage, languageData } = Ctx(); // List of words from the selected language (Context API)
  const { selectedWords } = languageData;
  const [msg, setMsg] = useState('Try to guess the word');

  // Random word picker
  const randomWord = () => {
    return selectedWords[Math.floor(Math.random() * selectedWords.length)];
  };

  useEffect(() => {
    setSolution(randomWord());
  }, [selectedWords]);

  // Handle input and key events
  useEffect(() => {
    const handleType = (event) => {
      if (isGameOver) {
        return;
      }

      if (event.key === 'Enter' && currentGuess.length === 5) {
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
        } else if (
          currentIndex === guesses.length - 1 &&
          solution !== currentGuess
        ) {
          setIsGameOver(true);
          setMsg('Game over. Restart for a new word.');
        }
      }

      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
      }

      if (currentGuess.length < 5 && /^[a-z]{1}$/i.test(event.key)) {
        setCurrentGuess((oldGuess) => oldGuess + event.key.toLowerCase());
      }
    };

    window.addEventListener('keydown', handleType);

    return () => window.removeEventListener('keydown', handleType);
  }, [currentGuess, isGameOver, solution, guesses]);

  const gameRestart = () => {
    setSolution(randomWord());
    setGuesses(Array(6).fill(null));
    setIsGameOver(false);
    setCurrentGuess('');
    setMsg('Try to guess the word');
    document.activeElement.blur(); // Removes focus from input
  };

  useEffect(() => {
    gameRestart();
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
            />
          );
        })}
      </div>
      <div className="new-game-button-container">
        <button className="new-game-button" onClick={gameRestart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Wordle;
