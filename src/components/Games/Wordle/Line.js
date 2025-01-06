import React from 'react';
import './game.css';

const Line = ({ guess, isFinal, solution, isError }) => {
  const getCellClass = (guess, index, isFinal) => {
    if (!guess || guess[index] === undefined) {
      return 'cell'; // Default classname
    }

    if (isError) {
      return 'cell error';
    }

    // Only apply colors if the guess is finalized
    if (!isFinal) {
      return 'cell';
    }

    const char = guess[index];
    if (solution[index] === char) {
      return 'cell correct'; // Correct character and position
    } else if (solution.includes(char)) {
      return 'cell present'; // Correct character but wrong position
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

export default Line;
