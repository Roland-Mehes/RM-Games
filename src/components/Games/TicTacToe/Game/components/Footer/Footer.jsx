import React, { useEffect } from 'react';
import styles from './footer.module.css';
import { Ctx } from '../../../../../../context/LanguageContext';
import { useHandleDisplayUserName } from '../../../../../customHooks/useFetchUserName';
import useFirebase from '../../../../Hangman/customHooks/useFirebase';
import WinLose from '../../../../services/winLose';

const Footer = () => {
  const { TicTacToe } = Ctx();
  const { player1Marker } = TicTacToe;
  const userName = useHandleDisplayUserName();
  const { userStats, setUserStats } = useFirebase(
    userName,
    {
      win: 10,
      lose: 0,
      tie: 3,
    },
    'TicTacToe'
  );

  const cpuMarker = player1Marker === 'X' ? 'O' : 'X';

  // Updateing the Score

  useEffect(() => {
    // Here comes the Data fetch from FireBase
  }, [setUserStats]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.scoreContainer}>
        <div className={styles.firstPlayer}>
          {player1Marker} ({userName})
          <WinLose game="TicTacToe" win={true} userStats={userStats} />
        </div>
        <div className={styles.secondPlayer}>
          {cpuMarker} (CPU)
          <WinLose game="TicTacToe" lose={true} userStats={userStats} />
        </div>
      </div>

      <div className={styles.tieContainer}>
        <WinLose game="TicTacToe" tie={true} userStats={userStats} />
      </div>
    </div>
  );
};

export default Footer;
