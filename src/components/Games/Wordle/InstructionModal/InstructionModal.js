import styles from './InstructionModal.module.css';

const InstructionModal = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-close-button']}>X</div>
      <div className={styles['modal-content']}>
        <h2>Instructions</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="200"
          viewBox="0 0 500 200"
        >
          {/* Helyes betű és hely (zöld) */}
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="#4caf50"
            stroke="#000"
            strokeWidth="2"
          />
          <text
            x="50"
            y="60"
            fontSize="40"
            fontFamily="Arial"
            fill="white"
            textAnchor="middle"
          >
            A
          </text>

          {/* Helyes betű, rossz hely (sárga) */}
          <rect
            x="100"
            y="10"
            width="80"
            height="80"
            fill="#ffeb3b"
            stroke="#000"
            strokeWidth="2"
          />
          <text
            x="140"
            y="60"
            fontSize="40"
            fontFamily="Arial"
            fill="#000"
            textAnchor="middle"
          >
            B
          </text>

          {/* Hibás betű (szürke) */}
          <rect
            x="190"
            y="10"
            width="80"
            height="80"
            fill="#bdbdbd"
            stroke="#000"
            strokeWidth="2"
          />
          <text
            x="230"
            y="60"
            fontSize="40"
            fontFamily="Arial"
            fill="#000"
            textAnchor="middle"
          >
            C
          </text>

          {/* Piros - a szó nincs az adatbázisban */}
          <rect
            x="280"
            y="10"
            width="80"
            height="80"
            fill="red"
            stroke="#000"
            strokeWidth="2"
          />
          <text
            x="320"
            y="60"
            fontSize="40"
            fontFamily="Arial"
            fill="white"
            textAnchor="middle"
          >
            D
          </text>

          {/* Üres mező például */}
          <rect
            x="370"
            y="10"
            width="80"
            height="80"
            fill="white"
            stroke="#000"
            strokeWidth="2"
          />
          <text
            x="410"
            y="60"
            fontSize="40"
            fontFamily="Arial"
            fill="#000"
            textAnchor="middle"
          >
            E
          </text>

          {/* Leírások */}
          <text x="10" y="120" fontSize="16" fontFamily="Arial" fill="#000">
            GREEN : Correct Letter and Position
          </text>
          <text x="10" y="140" fontSize="16" fontFamily="Arial" fill="#000">
            Yellow: Correct letter wrong position
          </text>
          <text x="10" y="160" fontSize="16" fontFamily="Arial" fill="#000">
            GRAY: Wrong letter
          </text>
          <text x="10" y="180" fontSize="16" fontFamily="Arial" fill="#000">
            RED : Word is not in our database
          </text>
        </svg>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InstructionModal;
