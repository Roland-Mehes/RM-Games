import styles from './board.module.css';
import X from '../../../assets/X';
import O from '../../../assets/O';
import XHover from '../../../assets/XHover';
import OHover from '../../../assets/OHover';
import { useEffect, useState } from 'react';
import { computerMove } from '../../utils/computerMove';
import { checkGameState } from '../../utils/checkGameState';
import { Ctx } from '../../../../../../context/LanguageContext';

const Board = ({ setIsModalOpen }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isBoardLocked, setIsBoardLocked] = useState(false);

  const { TicTacToe, setTicTacToe } = Ctx();
  const { boardCells, currentPlayer, isWinner, gameMode, player1Marker } =
    TicTacToe;

  // Win condition + Modal opening
  useEffect(() => {
    checkGameState(
      boardCells,
      player1Marker,
      (newWinner) => setTicTacToe((prev) => ({ ...prev, isWinner: newWinner })),
      setIsModalOpen,
      () => {}, //placeholder for later score manipulation
      () => {}, //placeholder for later score manipulation
      () => {} //placeholder for later score manipulation
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardCells, player1Marker, setTicTacToe]);

  // CPU Move
  useEffect(() => {
    const isBoardEmpty = boardCells.every((cell) => cell === null);
    const isComputerTurn = currentPlayer !== player1Marker;
    const isCpuGame = gameMode === 'cpu';

    if (isCpuGame && !isWinner && isComputerTurn) {
      setIsBoardLocked(true);
      const delay = isBoardEmpty ? 500 : 400;
      const timer = setTimeout(() => {
        computerMove(boardCells, currentPlayer, (newBoard) =>
          setTicTacToe((prev) => ({
            ...prev,
            boardCells: newBoard,
            currentPlayer: prev.currentPlayer === 'X' ? 'O' : 'X',
          }))
        );
        setIsBoardLocked(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [
    boardCells,
    currentPlayer,
    gameMode,
    player1Marker,
    isWinner,
    setTicTacToe,
  ]);

  useEffect(() => {
    if (boardCells.every((cell) => cell === null)) {
      setIsBoardLocked(false);
    }
  }, [boardCells]);

  // Handle Click
  const handleClick = (index) => {
    if (isWinner || boardCells[index] !== null || isBoardLocked) return;

    const newBoard = [...boardCells];
    newBoard[index] = currentPlayer;

    setTicTacToe((prev) => ({
      ...prev,
      boardCells: newBoard,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
    }));
  };

  return (
    <div className={styles.cellContainer}>
      {boardCells.map((cell, idx) => (
        <div
          key={idx}
          className={styles.cell}
          onClick={() => handleClick(idx)}
          onMouseEnter={() => setHoverIndex(idx)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {cell === 'X' ? (
            <X width="79px" height="79px" fill="#008AFF" />
          ) : cell === 'O' ? (
            <O width="79px" height="79px" fill="#FFAA00" />
          ) : hoverIndex === idx ? (
            currentPlayer === 'X' ? (
              <XHover />
            ) : (
              <OHover />
            )
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Board;
