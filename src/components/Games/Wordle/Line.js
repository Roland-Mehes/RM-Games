import React from 'react';
import './game.css';

const Line = ({ guess, isFinal, solution, isError }) => {
  const getCellClass = (guess, index, isFinal) => {
    if (!guess || guess[index] === null) {
      return 'cell'; // Default classname
    }

    if (isError) {
      return 'cell error';
    }

    if (!isFinal) {
      return 'cell'; // No colors unless the guess is finalized
    }

    const char = guess[index];
    const solutionCharCounts = {};

    // Count characters in the solution
    for (let ch of solution) {
      solutionCharCounts[ch] = (solutionCharCounts[ch] || 0) + 1;
    }

    // First pass: Mark correct positions (green)
    const exactMatches = Array(5).fill(false);
    for (let i = 0; i < 5; i++) {
      if (guess[i] === solution[i]) {
        exactMatches[i] = true;
        solutionCharCounts[guess[i]]--;
      }
    }

    // Second pass: Mark misplaced characters (yellow)
    if (exactMatches[index]) {
      return 'cell correct'; // Correct position
    } else if (solution.includes(char) && solutionCharCounts[char] > 0) {
      solutionCharCounts[char]--; // Decrement the count for misplaced matches
      return 'cell present'; // Correct character, wrong position
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
