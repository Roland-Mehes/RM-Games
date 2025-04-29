import { useNavigate } from 'react-router-dom';
import styles from './gameMenu.module.css';
import XOLogo from '../components/XOLOGO';
import Button from '../components/Button';
import MarkerSwitcher from './components/MarkerSwitcher';

const GameMenu = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/TicTacToeGame`);
  };

  const handleOnClickNewGame = () => {
    navigate(`/TicTacToeGame?newGame=true`);
  };

  return (
    <div className={styles.mainContainer}>
      <XOLogo></XOLogo>
      <MarkerSwitcher></MarkerSwitcher>
      <div style={{ display: 'grid', gap: '1rem', margin: '2rem 0' }}>
        <Button onClick={handleOnClick}>CONTINUE</Button>
        <Button onClick={handleOnClickNewGame}>NEW GAME (VS CPU)</Button>
      </div>
    </div>
  );
};

export default GameMenu;
