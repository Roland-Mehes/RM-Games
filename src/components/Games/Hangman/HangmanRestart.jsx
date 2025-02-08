import styles from './HangmanRestart.module.css';

function HangmanRestart({ isWinner, isLoser, onRestart }) {
  const isDisabled = !isWinner && !isLoser;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        disabled={isDisabled}
        onClick={onRestart}
        className={`${styles.hangmanRestartButton} ${
          isDisabled ? styles.disabled : ''
        }`}
      >
        New Word
      </button>
    </div>
  );
}

export default HangmanRestart;
