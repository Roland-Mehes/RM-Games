import React from 'react';

function HangmanWord({ wordToGuess, guessedLetters, reveal = false }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden  ',
              color:
                !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
