import { useState, useEffect } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import styles from './HangmanKeyboard.module.css';

const HangmanKeyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedletter,
  disabled = false,
}) => {
  const { languageData } = Ctx();
  const [keyboard, setKeyboard] = useState(languageData.keyboard || []);

  useEffect(() => {
    setKeyboard(languageData.keyboard || []);
  }, [languageData]);

  const filteredKeyboard = keyboard.map((row) =>
    row.filter(
      (character) => character !== 'enter' && character !== 'backspace'
    )
  );

  return (
    <div className={`${styles.hangmanKeyboardContainer}`}>
      {filteredKeyboard.map((row, rowidx) => (
        <div key={row + rowidx} className="hangmanKeyboardRow">
          {row.map((character, idx) => {
            const isActive = activeLetters?.includes(character);
            const isInactive = inactiveLetters?.includes(character);
            return (
              <button
                onClick={() => addGuessedletter(character)}
                className={`${styles.hangmanBtn} ${
                  isActive ? styles.active : ''
                }${isInactive ? styles.inactive : ''}`}
                disabled={isInactive || isActive || disabled}
                key={character + idx}
              >
                {character}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
export default HangmanKeyboard;
