import React from 'react';
import styles from './Styles/generalStyle.module.css';
import Board from '../components/Games/Sudoku/Board';

const Sudoku = () => {
  return (
    <div className={styles.mainContainer}>
      <Board />
    </div>
  );
};

export default Sudoku;
