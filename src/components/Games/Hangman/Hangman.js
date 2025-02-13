import './Hangman.css';
import HangmanKeyboard from './HangmanKeyboard';
import { useState, useEffect, useCallback } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import HangmanBodyDraw from './HangmanBodyDraw';
import HangmanWord from './HangmanWord';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { HiOutlineRefresh } from 'react-icons/hi';
import WinLose from '../services/winLose';
import { writeUserData, readUserData } from '../../../fbServices/fbDB';

function Hangman() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]); // Store the guesses
  const { selectedLanguage, languageData, isLoggedIn, userName } = Ctx(); // Get language and words from context
  const { selectedWords } = languageData; // The word list
  const [currentWin, setCurrentWin] = useState();
  const [currentLose, setCurrentLose] = useState();

  const inCorrectLetters = guessedLetters.filter(
    (letter) => wordToGuess && !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  // Random word picker
  const randomWord = useCallback(() => {
    if (selectedWords && selectedWords.length > 0) {
      return selectedWords[Math.floor(Math.random() * selectedWords.length)];
    }
    return '';
  }, [selectedWords]);

  console.log(wordToGuess);

  useEffect(() => {
    if (selectedWords && selectedWords.length > 0) {
      setWordToGuess(randomWord());
      setGuessedLetters([]);
    }
  }, [selectedWords, randomWord, selectedLanguage]);

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (event) => {
      const key = event.key;

      if (!key.match(/^[a-záéíóöőúüűăâîșț]{1}$/)) return;

      event.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedLetters, addGuessedLetter]);

  useEffect(() => {
    const handleWinLoseIncrementer = async () => {
      if (userName?.uid) {
        const res = await readUserData(userName.uid);

        setCurrentWin(res?.hangman?.win);
        setCurrentLose(res?.hangman?.lose);
        let dataWIN = currentWin;
        let dataLOSE = currentLose;
        if (isWinner) {
          setCurrentWin(dataWIN++);
          console.log(currentWin);
        }
        if (isLoser) {
          setCurrentLose(dataLOSE++);
        }
        await writeUserData(userName.uid, {
          hangman: {
            win: currentWin,
            lose: currentLose,
          },
        });
      }
    };
    return () => handleWinLoseIncrementer();
    // eslint-disable-next-line
  }, [currentWin, currentLose]);
  return (
    <>
      <div className="main-container">
        <div className="hangman-container">
          <div className="hangman-header">
            <IoIosHelpCircleOutline color="white" size="30" />
            <>{isLoggedIn && <WinLose game="hangman" win="true" />}</>
            {isWinner && 'WINNER - Refresh to try again '}
            {isLoser && 'Nice Try '}
            <>{isLoggedIn && <WinLose game="hangman" lose="true" />}</>
            <div className="refresh-button">
              <HiOutlineRefresh
                size="30"
                onClick={() => {
                  setWordToGuess(randomWord());
                  setGuessedLetters([]);
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
    </>
  );
}

export default Hangman;
