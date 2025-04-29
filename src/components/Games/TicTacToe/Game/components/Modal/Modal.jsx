import React from 'react';
import styles from './Modal.module.css';
import Button from '../../../components/Button';

const Modal = ({
  title,
  subtitle,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  SvgComponent,
  svgColor,
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.modal}>
        <h3>{title}</h3>

        <div className={styles.subtitle}>
          {SvgComponent && (
            <SvgComponent width={'49px'} height={'49px'} fill={svgColor} />
          )}
          <h1 style={{ color: svgColor }}>{subtitle}</h1>
        </div>

        <div className={styles.buttonContainer}>
          <Button quitModalButton={true} onClick={onCancel}>
            {cancelText}
          </Button>
          <Button modalButton={true} onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
