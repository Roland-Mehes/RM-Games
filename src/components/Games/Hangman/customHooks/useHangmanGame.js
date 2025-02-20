import { useState, useEffect, useCallback } from 'react';
import { writeUserData } from '../../../../fbServices/fbDB';
import { Ctx } from '../../../../context/LanguageContext';

export const useHangmanGame = (wordToGuess, setUserStats) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [isLoser, setIsLoser] = useState(false);
  const { userName } = Ctx();

  const inCorrectLetters = guessedLetters.filter(
    (letter) => wordToGuess && !wordToGuess.includes(letter)
  );

  // Add guessed letter
  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  // Restart the game when word changes
  useEffect(() => {
    setGuessedLetters([]);
    setIsWinner(false);
    setIsLoser(false);
  }, [wordToGuess]);

  // Check game status (win/lose)
  const checkGameStatus = useCallback(() => {
    const isGameWinner = wordToGuess
      .split('')
      .every((letter) => guessedLetters.includes(letter));

    const isGameLoser = inCorrectLetters.length >= 6;

    if (isGameWinner && !isWinner) {
      setIsWinner(true);
      setUserStats((prevStats) => {
        if (userName) {
          const newStats = { ...prevStats, win: prevStats.win + 1 };

          writeUserData(userName.uid, { hangman: newStats }); // Közvetlen mentés Firebase-be
          return newStats;
        }
      });
    }

    if (isGameLoser && !isLoser) {
      setIsLoser(true);
      setUserStats((prevStats) => {
        if (userName) {
          const newStats = { ...prevStats, lose: prevStats.lose + 1 };
          writeUserData(userName.uid, { hangman: newStats }); // Közvetlen mentés Firebase-be
          return newStats;
        }
      });
    } // eslint-disable-next-line
  }, [
    guessedLetters,
    wordToGuess,
    inCorrectLetters,
    isWinner,
    isLoser,
    setUserStats,
  ]);

  // handle physical Keyboard
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase();
      if (key.match(/^[a-záéíóöőúüűăâîșț]{1}$/i)) {
        event.preventDefault();
        addGuessedLetter(key);
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [guessedLetters, isWinner, isLoser, addGuessedLetter]);

  useEffect(() => {
    if (wordToGuess && !isWinner && !isLoser) {
      checkGameStatus();
    }
  }, [
    guessedLetters,
    wordToGuess,
    inCorrectLetters,
    isWinner,
    isLoser,
    checkGameStatus,
  ]);

  return {
    guessedLetters,
    isWinner,
    isLoser,
    addGuessedLetter,
    inCorrectLetters,
  };
};
