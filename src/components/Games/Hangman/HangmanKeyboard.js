import { useState, useEffect } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import './HangmanKeyboard.css';

const HangmanKeyboard = () => {
  const { languageData } = Ctx();
  const [keyboard, setKeyboard] = useState(languageData.keyboard || []);

  useEffect(() => {
    setKeyboard(languageData.keyboard || []);
  }, [languageData]);

  const handleKeyPress = (val) => {
    console.log(val);
  };

  return (
    <div className="hangman-keyboard-container ">
      {keyboard.map((row, rowidx) => (
        <div key={row + rowidx} className="hangman-keyboard-rows">
          {row.map((character, idx) => (
            <button
              onClick={() => handleKeyPress(character)}
              className="hangman-btn"
              key={character + idx}
            >
              {character === 'enter'
                ? 'Enter'
                : character === 'backspace'
                ? '←'
                : character}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
export default HangmanKeyboard;
