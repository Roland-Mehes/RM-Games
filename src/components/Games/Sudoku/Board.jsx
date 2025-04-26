import React from 'react';
import styles from './Styles/Board.module.css';

const Board = () => {
  // const starterBoard = Array.from({ length: 9 }, () =>
  //   Array(9).fill(Math.floor(Math.random() * 9) + 1)
  // );
  const starterBoard = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ];
  return (
    <div className={styles.mainContainer}>
      {starterBoard.map((row, rowIdx) => (
        <div key={rowIdx} className={styles.row}>
          {row.map((coll, collIdx) => (
            <div
              key={coll + collIdx}
              className={`${styles.collumn} ${
                collIdx % 3 === 0 && collIdx !== 0 ? styles.borderLeft : ''
              }
                ${
                  (collIdx + 1) % 3 === 0 && collIdx !== 8
                    ? styles.borderRight
                    : ''
                } 
              }   ${rowIdx % 3 === 0 && rowIdx !== 0 ? styles.borderTop : ''}
                 
              ${
                (rowIdx + 1) % 3 === 0 && rowIdx !== 8
                  ? styles.borderBottom
                  : ''
              } 
              `}
            >
              {/*Content*/}
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'black',
                }}
              >
                {coll !== 8 && coll}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
