import { useState, useEffect, useCallback } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import './game.css';
import { HiOutlineRefresh } from 'react-icons/hi';
import Keyboard from '../../Keyboard/keyboard';
import InstructionModal from './InstructionModal/InstructionModal';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import WinLose from '../services/winLose';
import useFirebase from '../Hangman/customHooks/useFirebase';
import useFireworks from '../../customHooks/useFireworks';

const Wordle = () => {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(Array(6).fill(false));
  const [testMode, setTestMode] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [isLoser, setIsLoser] = useState(false);
  const [hint, setHint] = useState(false);

  const { selectedLanguage, languageData, languages, isLoggedIn, userName } =
    Ctx();
  const { selectedWords } = languageData;
  const { lang } = languages[selectedLanguage];
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Firebase statisztika kezelése
  const { userStats, setUserStats } = useFirebase(
    userName,
    { win: 0, lose: 0 },
    'wordle',
    isWinner,
    isLoser
  );

  useFireworks(isWinner);

  // Random szó kiválasztása
  const randomWord = () =>
    selectedWords?.length > 0
      ? selectedWords[Math.floor(Math.random() * selectedWords.length)]
      : '';

  // Gépelt betűk kezelése
  const handleType = useCallback(
    (event) => {
      if (isGameOver) return;

      if (event.key === 'Enter' && currentGuess.length === 5) {
        if (testMode && !selectedWords.includes(currentGuess)) {
          setMsg(lang.wordleWordIsNotInDatabase);
          const index = guesses.findIndex((val) => val == null);
          if (index !== -1) {
            const newErrorState = [...isError];
            newErrorState[index] = true;
            setIsError(newErrorState);
          }
          return;
        }

        const newGuesses = [...guesses];
        const index = guesses.findIndex((val) => val == null);

        if (index !== -1) {
          newGuesses[index] = currentGuess;
          setGuesses(newGuesses);
          setCurrentGuess('');
        }

        if (solution === currentGuess) {
          setIsGameOver(true);
          setIsWinner(true);
          setMsg(lang.hangmanWin);
          setUserStats((prevStats) => ({
            ...prevStats,
            win: prevStats.win + 1,
          }));
        } else if (index === guesses.length - 1) {
          setIsGameOver(true);
          setIsLoser(true);
          setMsg(
            <span>
              {lang.gameOverText}{' '}
              <span style={{ color: 'red' }}>[{solution.toUpperCase()}]</span>
            </span>
          );
          setUserStats((prevStats) => ({
            ...prevStats,
            lose: prevStats.lose + 1,
          }));
        }
      }

      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        setIsError(Array(6).fill(false));
        if (currentGuess.length === 5 && testMode) setMsg('');
      }

      if (
        currentGuess.length < 5 &&
        /^[a-záéíóöőúüűăâîșț]{1}$/i.test(event.key)
      ) {
        setCurrentGuess((oldGuess) => oldGuess + event.key.toLowerCase());
      }
    },
    [
      isGameOver,
      currentGuess,
      testMode,
      selectedWords,
      lang,
      guesses,
      isError,
      solution,
      setUserStats,
    ]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleType);
    return () => window.removeEventListener('keydown', handleType);
  }, [handleType]);

  const gameRestart = () => {
    setSolution(randomWord());
    setGuesses(Array(6).fill(null));
    setIsGameOver(false);
    setCurrentGuess('');
    setMsg('');
    setIsWinner(false);
    setIsError(Array(6).fill(false));
  };

  useEffect(() => {
    gameRestart();
    // eslint-disable-next-line
  }, [selectedWords]);

  return (
    <>
      <div className="board-container">
        {/* Hint */}
        <div className="hint">
          <p onClick={() => setHint(!hint)}>
            {hint === false ? 'Show' : 'Hide'}
          </p>
          {hint && <span>{solution}</span>}
        </div>
        <div className="board">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="help">
              <IoIosHelpCircleOutline
                size="30"
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: 'pointer', color: 'white' }}
              />
            </div>

            {isLoggedIn && (
              <>
                <WinLose game="wordle" win="true" userStats={userStats} />
                <WinLose game="wordle" lose="true" userStats={userStats} />
              </>
            )}
            <div className="refresh-button">
              <HiOutlineRefresh size="30" onClick={gameRestart} />
            </div>
          </div>

          <div className="wordle-msg-container">
            <h3 style={{ whiteSpace: 'pre-line' }}>{selectedLanguage}</h3>
            <span className="wordle-msg">{msg}</span>
          </div>

          {guesses.map((guess, i) => {
            const isCurrentGuess =
              i === guesses.findIndex((val) => val == null);
            return (
              <Line
                key={i}
                guess={isCurrentGuess ? currentGuess : guess ?? ''}
                isFinal={!isCurrentGuess && guess !== null}
                solution={solution}
                isError={isError[i]}
              />
            );
          })}

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="checkbox" onChange={() => setTestMode(!testMode)} />
            Hard Mode
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <div className="keyboard">
            <Keyboard keyPressed={handleType} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <InstructionModal toggleModalProp={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

// LINE COMPONENT
const Line = ({ guess, isFinal, solution, isError }) => {
  const getCellClass = (guess, index, isFinal) => {
    if (!guess) return 'cell';
    if (isError) return 'cell error';

    if (!isFinal) return 'cell';

    const char = guess[index];
    const solutionCharCounts = [...solution].reduce((acc, ch) => {
      acc[ch] = (acc[ch] || 0) + 1;
      return acc;
    }, {});

    const exactMatches = Array(5).fill(false);
    for (let i = 0; i < 5; i++) {
      if (guess[i] === solution[i]) {
        exactMatches[i] = true;
        solutionCharCounts[guess[i]]--;
      }
    }

    if (exactMatches[index]) return 'cell correct';
    if (solution.includes(char) && solutionCharCounts[char] > 0) {
      solutionCharCounts[char]--;
      return 'cell present';
    }
    return 'cell absent';
  };

  return (
    <div className={`line ${isFinal ? 'final' : ''}`}>
      {Array(5)
        .fill('')
        .map((_, index) => (
          <div key={index} className={getCellClass(guess, index, isFinal)}>
            {guess ? guess[index] : ''}
          </div>
        ))}
    </div>
  );
};

export default Wordle;
