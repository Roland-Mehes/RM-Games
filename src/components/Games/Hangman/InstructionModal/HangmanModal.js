import styles from './HangmanModal.module.css';
import { Ctx } from '../../../../context/LanguageContext';

const InstructionModal = ({ toggleModalProp }) => {
  const { selectedLanguage, languages } = Ctx();
  const { lang } = languages[selectedLanguage];
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-close-button']} onClick={toggleModalProp}>
          X
        </div>

        <h2>{lang.hangmanRules.title}</h2>
        <p>{lang.hangmanRules.description}</p>
        <p>
          <svg
            width="200"
            height="250"
            viewBox="0 0 200 250"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hangman */}
            <line
              x1="20"
              y1="230"
              x2="120"
              y2="230"
              stroke="black"
              strokeWidth="5"
            />
            <line
              x1="70"
              y1="230"
              x2="70"
              y2="50"
              stroke="black"
              strokeWidth="5"
            />
            <line
              x1="70"
              y1="50"
              x2="150"
              y2="50"
              stroke="black"
              strokeWidth="5"
            />
            <line
              x1="150"
              y1="50"
              x2="150"
              y2="80"
              stroke="black"
              strokeWidth="3"
            />

            {/* <!-- Letterposition (5 underline) --> */}
            <line
              x1="30"
              y1="250"
              x2="50"
              y2="250"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="60"
              y1="250"
              x2="80"
              y2="250"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="90"
              y1="250"
              x2="110"
              y2="250"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="120"
              y1="250"
              x2="140"
              y2="250"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="150"
              y1="250"
              x2="170"
              y2="250"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </p>
        <ul>
          {lang.hangmanRules.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InstructionModal;
