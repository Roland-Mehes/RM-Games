import React from 'react';
import styles from './XOLogo.module.css';
// import BlueX from './SVG/BlueX';

const XOLogo = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Render X */}
      <div className={styles.BlueX}>
        <div className={styles.XLeftTToRightB}></div>
        <div className={styles.XLeftBToRigthT}></div>
      </div>
      {/* Render O */}
      <div className={styles.OrangeO}>
        <div className={styles.outerO}></div>
        <div className={styles.innerO}></div>
      </div>
    </div>
  );
};

export default XOLogo;
