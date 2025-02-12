import React from 'react';
import WinLose from '../services/winLose';

const Sudoku = () => {
  return (
    <div>
      <WinLose game="hangman" win="true" lose="true" />
    </div>
  );
};

export default Sudoku;
