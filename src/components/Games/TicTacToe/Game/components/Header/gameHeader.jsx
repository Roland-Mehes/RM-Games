// import React from 'react';
import X from '../../../assets/X';
import O from '../../../assets/O';
import Restart from '../../../assets/Restart';
import styles from './gameHeader.module.css';
import { Ctx } from '../../../../../../context/LanguageContext';

const GameHeader = ({ setIsModalOpen }) => {
  const { TicTacToe } = Ctx();
  const { currentPlayer } = TicTacToe;

  const handleOnClick = () => {
    setIsModalOpen('restart');
  };

  return (
    <div className={styles.mainContainer}>
      <div>
        <X width={'35px'} height={'35px'} fill="#008AFF" />
        <O width={'35px'} height={'35px'} fill="#ffaa00" />
      </div>

      <div className={styles.scoreDisplay}>
        {currentPlayer === 'X' ? (
          <X width={'20px'} height={'20px'} />
        ) : (
          <O width={'20px'} height={'20px'} />
        )}
        <h3>TURN</h3>
      </div>

      <div className={styles.restartContainer} onClick={handleOnClick}>
        <Restart width={'20px'} height={'20px'} fill={'#0e2c42'} />
      </div>
    </div>
  );
};

export default GameHeader;
