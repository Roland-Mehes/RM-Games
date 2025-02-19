import './Hangman.css';
import { useState, useEffect } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { HiOutlineRefresh } from 'react-icons/hi';
import HangmanBodyDraw from './HangmanBodyDraw';
import HangmanWord from './HangmanWord';
import HangmanKeyboard from './HangmanKeyboard';
import HangmanModal from './InstructionModal/HangmanModal';
import WinLose from '../services/winLose';
import useFirebase from './customHooks/useFirebase';
import { useRandomWordGenerator } from './customHooks/useRandomWordGenerator';
import { useHangmanGame } from './customHooks/useHangmanGame';

function Hangman() {
  const { languageData, isLoggedIn, userName } = Ctx();
  const { selectedWords } = languageData;
  const randomWord = useRandomWordGenerator();

  const [wordToGuess, setWordToGuess] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userStats, setUserStats } = useFirebase(userName, {
    win: 0,
    lose: 0,
  });

  const {
    guessedLetters,
    isWinner,
    isLoser,
    addGuessedLetter,
    inCorrectLetters,
  } = useHangmanGame(wordToGuess, setUserStats);

  // Restart the game with a new word
  useEffect(() => {
    if (selectedWords.length > 0) {
      setWordToGuess(randomWord());
    }
  }, [selectedWords, randomWord]);

  console.log(wordToGuess);

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
