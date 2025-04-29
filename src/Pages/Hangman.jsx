import '../components/Games/Hangman/Hangman.css';
import { useState, useEffect } from 'react';
import { Ctx } from '../context/LanguageContext';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { HiOutlineRefresh } from 'react-icons/hi';
import HangmanBodyDraw from '../components/Games/Hangman/HangmanBodyDraw';
import HangmanWord from '../components/Games/Hangman/HangmanWord';
import HangmanKeyboard from '../components/Games/Hangman/HangmanKeyboard';
import HangmanModal from '../components/Games/Hangman/InstructionModal/HangmanModal';
import WinLose from '../components/Games/services/winLose';
import useFirebase from '../components/Games/Hangman/customHooks/useFirebase';
import { useRandomWordGenerator } from '../components/Games/Hangman/customHooks/useRandomWordGenerator';
import { useHangmanGame } from '../components/Games/Hangman/customHooks/useHangmanGame';
import useFireworks from '../components/customHooks/useFireworks';

function Hangman() {
  const {
    languages,
    selectedLanguage,
    isLoggedIn,
    userName,

    languageData,
  } = Ctx();
  const { selectedWords } = languageData;
  const randomWord = useRandomWordGenerator();

  const [wordToGuess, setWordToGuess] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const { lang } = languages[selectedLanguage];
  const { userStats, setUserStats } = useFirebase(
    userName,
    {
      win: 0,
      lose: 0,
    },
    'hangman'
  );

  const {
    guessedLetters,
    isWinner,
    isLoser,
    addGuessedLetter,
    inCorrectLetters,
  } = useHangmanGame(wordToGuess, setUserStats);

  useFireworks(isWinner);

  // Restart the game with a new word
  useEffect(() => {
    if (selectedWords?.length > 0) {
      setWordToGuess(randomWord());
    }
  }, [selectedWords, randomWord]);

  return (
    <>
      <div className="main-container">
        {/* Hint */}
        <div className="hint">
          <p onClick={() => setHint(!hint)}>
            {hint === false ? 'Show' : 'Hide'}
          </p>
          {hint && <span>{wordToGuess}</span>}
        </div>

        {/* Hangman Container */}
        <div className="hangman-container">
          <div className="hangman-header">
            <div className="help">
              <IoIosHelpCircleOutline
                size="30"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            {isLoggedIn && (
              <WinLose game="hangman" win={true} userStats={userStats} />
            )}
            {isWinner && (
              <h6 style={{ fontFamily: `'Risque',serif'`, color: 'green' }}>
                {lang.hangmanWin}
              </h6>
            )}
            {isLoser && (
              <h6 style={{ fontFamily: `'Risque',serif'`, color: 'red' }}>
                {lang.gameOverText}
              </h6>
            )}
            {isLoggedIn && (
              <WinLose game="TicTacToe" lose={true} userStats={userStats} />
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
