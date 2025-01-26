import React, { useEffect, useState } from 'react';
import { Ctx } from '../../context/LanguageContext';
import './Keyboard.css';

const Keyboard = () => {
  const { languageData } = Ctx();
  const [keyboard, setKeyboard] = useState(languageData.keyboard || []);

  // Frissítsük a billentyűzetet, ha a nyelv változik
  useEffect(() => {
    setKeyboard(languageData.keyboard || []);
  }, [languageData]);

  const handleKeyPress = (key) => {
    let event;

    if (key === 'enter') {
      event = { key: 'Enter' };
    } else if (key === 'backspace') {
      event = { key: 'Backspace' };
    } else {
      event = { key };
    }

    window.dispatchEvent(new KeyboardEvent('keydown', event));
  };

  return (
    <div className="keyboard">
      {keyboard.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
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
