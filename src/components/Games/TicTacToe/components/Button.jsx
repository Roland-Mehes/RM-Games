import React from 'react';
import styles from './button.module.css';

const Button = ({ children, onClick, modalButton, quitModalButton }) => {
  let buttonClass = styles.customButton;

  if (modalButton) {
    buttonClass = styles.customModalButton;
  }

  if (quitModalButton) {
    buttonClass = styles.quitModalButton;
  }

  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
