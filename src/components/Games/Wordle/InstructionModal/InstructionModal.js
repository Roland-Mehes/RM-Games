import styles from './InstructionModal.module.css';
import { Ctx } from '../../../../context/LanguageContext';

const InstructionModal = ({ toggleModalProp }) => {
  const { selectedLanguage, languages } = Ctx();
  const { lang } = languages[selectedLanguage];
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        {/* Bezáró gomb most a modal-content részén belül van */}
        <div className={styles['modal-close-button']} onClick={toggleModalProp}>
          X
        </div>

        <h2>{lang.wordleRules.title}</h2>
        <p>{lang.wordleRules.description}</p>

        <div className={`${styles.cell} ${styles.correct}`}>H</div>
        <div className={`${styles.cell} ${styles.correct}`}>E</div>
        <div className={`${styles.cell} ${styles.present}`}>L</div>
        <div className={`${styles.cell} ${styles.present}`}>L</div>
        <div className={`${styles.cell} ${styles.absent}`}>O</div>

        {lang.wordleRules.rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}

        <div className={`${styles.cell} ${styles.error}`}>W</div>
        <div className={`${styles.cell} ${styles.error}`}>O</div>
        <div className={`${styles.cell} ${styles.error}`}>R</div>
        <div className={`${styles.cell} ${styles.error}`}>L</div>
        <div className={`${styles.cell} ${styles.error}`}>D</div>
        <li>{lang.wordleRules.lose}</li>
      </div>
    </div>
  );
};

export default InstructionModal;
