import './Hangman.css';
import { useState, useEffect, useCallback } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { HiOutlineRefresh } from 'react-icons/hi';
import HangmanBodyDraw from './HangmanBodyDraw';
import HangmanWord from './HangmanWord';
import HangmanKeyboard from './HangmanKeyboard';
import HangmanModal from './InstructionModal/HangmanModal';
import WinLose from '../services/winLose';
import useFirebase from './customHooks/useFirebase';
import useRandomWordGenerator from './customHooks/useRandomWordGenerator';

function Hangman() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const { languageData, isLoggedIn, userName } = Ctx();
  const { selectedWords } = languageData;
  const randomWord = useRandomWordGenerator();

  const [isWinner, setIsWinner] = useState(false);
  const [isLoser, setIsLoser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userStats, setUserStats } = useFirebase(
    userName,
    { win: 0, lose: 0 },
    isWinner,
    isLoser
  );

  const inCorrectLetters = guessedLetters.filter(
    (letter) => wordToGuess && !wordToGuess.includes(letter)
  );

  console.log(wordToGuess);

  // Restart the game with a new word
  useEffect(() => {
    if (selectedWords.length > 0) {
      setWordToGuess(randomWord());
      setGuessedLetters([]);
      setIsWinner(false);
      setIsLoser(false);
    }
  }, [selectedWords, randomWord]);

  // Add guessed letter
  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  // Key press handler
  useEffect(() => {
    const handler = (event) => {
      const key = event.key;
      if (!key.match(/^[a-záéíóöőúüűăâîșț]{1}$/)) return;
      event.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);
    return () => document.removeEventListener('keypress', handler);
  }, [guessedLetters, addGuessedLetter]);

  // Local update for game stats
  useEffect(() => {
    const checkGameStatus = () => {
      const isGameWinner = wordToGuess
        .split('')
        .every((letter) => guessedLetters.includes(letter));

      const isGameLoser = inCorrectLetters.length >= 6;

      if (isGameWinner && !isWinner) {
        setIsWinner(true);
        setUserStats((prevStats) => ({
          ...prevStats,
          win: prevStats.win + 1,
        }));
      }

      if (isGameLoser && !isLoser) {
        setIsLoser(true);
        setUserStats((prevStats) => ({
          ...prevStats,
          lose: prevStats.lose + 1,
        }));
      }
    };

    if (wordToGuess && !isWinner && !isLoser) {
      checkGameStatus();
    }
  }, [
    guessedLetters,
    wordToGuess,
    inCorrectLetters,
    isWinner,
    isLoser,
    setUserStats,
  ]);

  return (
    <>
      <div className="main-container">
        <div className="hangman-container">
          <div className="hangman-header">
            <div className="help">
              <IoIosHelpCircleOutline
                size="30"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            {isLoggedIn && (
              <WinLose game="hangman" win="true" userStats={userStats} />
            )}
            {isWinner && 'WINNER - Refresh to try again '}
            {isLoser && 'Nice Try '}
            {isLoggedIn && (
              <WinLose game="hangman" lose="true" userStats={userStats} />
            )}
            <div className="refresh-button">
              <HiOutlineRefresh
                size="30"
                onClick={() => {
                  setWordToGuess(randomWord());
                  setGuessedLetters([]);
                  setIsWinner(false);
                  setIsLoser(false);
                }}
              />
            </div>
          </div>
          <HangmanBodyDraw numberOfGuesses={inCorrectLetters.length} />
          <HangmanWord
            reveal={isLoser}
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          />
          <div className="hangman-keyboard-container"></div>
        </div>
        <HangmanKeyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={inCorrectLetters}
          addGuessedletter={addGuessedLetter}
        />
      </div>
      {isModalOpen && (
        <HangmanModal toggleModalProp={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default Hangman;
