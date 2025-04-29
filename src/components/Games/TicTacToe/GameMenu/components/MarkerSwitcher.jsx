import styles from './markerSwitcher.module.css';
import X from '../../assets/X';
import O from '../../assets/O';
import { Ctx } from '../../../../../context/LanguageContext';
import { useHandleDisplayUserName } from '../../../../customHooks/useFetchUserName';

const MarkerSwitcher = () => {
  const { TicTacToe, setTicTacToe } = Ctx();
  const { player1Marker } = TicTacToe;
  const userName = useHandleDisplayUserName();

  const handleActiveButton = (marker) => {
    setTicTacToe({
      ...TicTacToe,
      player1Marker: marker,
    });
  };

  return (
    <div className={styles.mainContainer}>
      <h3>
        PICK YOUR MARK <div className={styles.username}>{userName}</div>
      </h3>
      <div className={styles.toggle}>
        <div
          className={`${styles.XButton} ${
            player1Marker === 'X' ? styles.active : styles.inactive
          } `}
          onClick={() => handleActiveButton('X')}
        >
          <X
            width="30px"
            height="30px"
            fill={player1Marker === 'X' ? '#0C2233' : ''}
          />
        </div>
        <div
          className={`${styles.OButton} ${
            player1Marker === 'O' ? styles.active : styles.inactive
          }`}
          onClick={() => handleActiveButton('O')}
        >
          <O
            width="30px"
            height="30px"
            fill={player1Marker === 'X' ? '' : '#0C2233'}
          />
        </div>
      </div>
      <h3>
        <span className={styles.username}>X</span> GOES FIRST ALWAYS
      </h3>
    </div>
  );
};

export default MarkerSwitcher;
