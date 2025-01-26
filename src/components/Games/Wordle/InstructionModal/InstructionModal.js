import './InstructionModal.css';

const InstructionModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-close-button">X</div>
      <div className="modal-content">
        <h2>Instructions</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="200"
          viewBox="0 0 500 200"
        >
          {/* <!-- Helyes betű és hely (zöld) --> */}
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="#4caf50"
            stroke="#000"
            stroke-width="2"
          />
          <text
            x="50"
            y="60"
            font-size="40"
            font-family="Arial"
            fill="white"
            text-anchor="middle"
          >
            A
          </text>

          {/* <!-- Helyes betű, rossz hely (sárga) --> */}
          <rect
            x="100"
            y="10"
            width="80"
            height="80"
            fill="#ffeb3b"
            stroke="#000"
            stroke-width="2"
          />
          <text
            x="140"
            y="60"
            font-size="40"
            font-family="Arial"
            fill="#000"
            text-anchor="middle"
          >
            B
          </text>

          {/* <!-- Hibás betű (szürke) --> */}
          <rect
            x="190"
            y="10"
            width="80"
            height="80"
            fill="#bdbdbd"
            stroke="#000"
            stroke-width="2"
          />
          <text
            x="230"
            y="60"
            font-size="40"
            font-family="Arial"
            fill="#000"
            text-anchor="middle"
          >
            C
          </text>

          {/* <!-- Piros - a szó nincs az adatbázisban --> */}
          <rect
            x="280"
            y="10"
            width="80"
            height="80"
            fill="red"
            stroke="#000"
            stroke-width="2"
          />
          <text
            x="320"
            y="60"
            font-size="40"
            font-family="Arial"
            fill="white"
            text-anchor="middle"
          >
            D
          </text>

          {/* <!-- Üres mező például --> */}
          <rect
            x="370"
            y="10"
            width="80"
            height="80"
            fill="white"
            stroke="#000"
            stroke-width="2"
          />
          <text
            x="410"
            y="60"
            font-size="40"
            font-family="Arial"
            fill="#000"
            text-anchor="middle"
          >
            E
          </text>

          {/* <!-- Leírások --> */}
          <text x="10" y="120" font-size="16" font-family="Arial" fill="#000">
            Zöld: Helyes betű, helyes pozíció
          </text>
          <text x="10" y="140" font-size="16" font-family="Arial" fill="#000">
            Sárga: Helyes betű, rossz hely
          </text>
          <text x="10" y="160" font-size="16" font-family="Arial" fill="#000">
            Szürke: Hibás betű
          </text>
          <text x="10" y="180" font-size="16" font-family="Arial" fill="#000">
            Piros: A szó nincs az adatbázisban
          </text>
        </svg>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InstructionModal;
