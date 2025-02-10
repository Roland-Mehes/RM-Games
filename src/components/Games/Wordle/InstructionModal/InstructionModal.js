import styles from './InstructionModal.module.css';

const InstructionModal = ({ toggleModalProp }) => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        {/* Bezáró gomb most a modal-content részén belül van */}
        <div className={styles['modal-close-button']} onClick={toggleModalProp}>
          X
        </div>

        <h2>Wordle Játék Útmutató</h2>
        <p>
          A Wordle játék célja, hogy kitaláljuk az 5 betűs szót 6
          próbálkozásból. Minden egyes próbálkozás után a következő
          visszajelzéseket kapjuk:
        </p>

        <div className={`${styles.cell} ${styles.correct}`}>H</div>
        <div className={`${styles.cell} ${styles.correct}`}>E</div>
        <div className={`${styles.cell} ${styles.present}`}>L</div>
        <div className={`${styles.cell} ${styles.present}`}>L</div>
        <div className={`${styles.cell} ${styles.absent}`}>O</div>
        <p>
          <b>HELLO</b> - Az első négy karakter megfelel a szónak: a "H" és "E"
          zöld, mert a helyük helyes, a "L" és "L" sárga, mert benne van a
          szóban, de más helyen, míg az "O" szürke, mivel nem szerepel a szóban.
        </p>

        <div className={`${styles.cell} ${styles.error}`}>W</div>
        <div className={`${styles.cell} ${styles.error}`}>O</div>
        <div className={`${styles.cell} ${styles.error}`}>R</div>
        <div className={`${styles.cell} ${styles.error}`}>L</div>
        <div className={`${styles.cell} ${styles.error}`}>D</div>
        <p>
          <b>WORLD</b> - Ha hibát követünk el, piros hiba animációval értesít
          minket a játék.
        </p>
      </div>
    </div>
  );
};

export default InstructionModal;
