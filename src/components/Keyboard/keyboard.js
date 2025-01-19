import React from 'react';
import { Ctx } from '../../context/LanguageContext';
import './Keyboard.css';

const Keyboard = (props) => {
  const { languageData } = Ctx();
  const keyboard = languageData.keyboard || [];

  const handleKeyPress = (key) => {
    // Alapvetően a key értékével meghívod a megfelelő eseményeket
    let event;

    if (key === 'enter') {
      event = { key: 'Enter' }; // Az Enter gombot így kezeled
    } else if (key === 'backspace') {
      event = { key: 'Backspace' }; // A Backspace gombot így kezeled
    } else {
      event = { key }; // Egyéb karakterek
    }

    // Az event.key értéke ugyanaz, mint a billentyű lenyomása az inputnál
    window.dispatchEvent(new KeyboardEvent('keydown', event)); // Ezzel váltod ki a keydown eseményt
  };

  return (
    <div className="keyboard">
      {keyboard.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              onClick={() => handleKeyPress(key)}
              className="keyboard-key"
            >
              {key === 'enter' ? 'Enter' : key === 'backspace' ? '←' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
