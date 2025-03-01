import React, { useState, useEffect } from 'react';
import { Ctx } from '../../context/LanguageContext';
import './Keyboard.css';

const Keyboard = () => {
  const { languageData } = Ctx();
  const [keyboard, setKeyboard] = useState(languageData.keyboard);

  useEffect(() => {
    setKeyboard(languageData.keyboard);
  }, [languageData]);

  const handleKeyPress = (key) => {
    const keyMap = {
      enter: 'Enter',
      backspace: 'Backspace',
    };

    const event = { key: keyMap[key] || key };
    window.dispatchEvent(new KeyboardEvent('keydown', event));
  };

  return (
    <div className="keyboard">
      {keyboard.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key, keyIdx) => (
            <button
              key={keyIdx}
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
