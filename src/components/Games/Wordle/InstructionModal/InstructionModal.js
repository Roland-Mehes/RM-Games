import './InstructionModal.css';

const InstructionModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-close-button">X</div>
      <div className="modal-content">
        <h2>Instructions</h2>
        <p>This is how to play the game </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InstructionModal;
