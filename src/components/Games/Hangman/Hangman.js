import './Hangman.css';
import HangmanKeyboard from './HangmanKeyboard';
import { useState, useEffect, useMemo } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import HangmanBodyDraw from './HangmanBodyDraw';
import HangmanWord from './HangmanWord';

function Hangman() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]); // Store the guesses
  const { selectedLanguage, languageData } = Ctx(); // Get language and words from context
  const { selectedWords } = languageData; // The word list

  const inCorrectLetters = guessedLetters.filter(
    (letter) => wordToGuess && !wordToGuess.includes(letter)
  );

  // Random word picker
  const randomWord = () => {
    if (selectedWords && selectedWords.length > 0) {
      return selectedWords[Math.floor(Math.random() * selectedWords.length)];
    }
  };

  useEffect(() => {
    if (selectedWords && selectedWords.length > 0) {
      setWordToGuess(randomWord());
      setGuessedLetters([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedWords, selectedLanguage]);

  console.log(randomWord());

  const addGuessedLetter = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

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
  }, [guessedLetters]);

  return (
    <>
      <div className="hangman-container">
        <div className="hangman-header">Lose or Win</div>
        <HangmanBodyDraw numberOfGuesses={inCorrectLetters.length} />
        <HangmanWord
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />

        <div className="hangman-keyboard-container"></div>
      </div>
      <HangmanKeyboard />
    </>
  );
}

export default Hangman;
