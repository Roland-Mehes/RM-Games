import React, { useState } from 'react';
import styles from './game.module.css';
import Board from './components/Board/Board';
import GameHeader from './components/Header/gameHeader';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { Ctx } from '../../../../context/LanguageContext';
import { GetModalContent } from './utils/modalUtils';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const TicTacToeGame = () => {
  const params = useLocation();
  const isNewGame = params.search === '?newGame=true';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { TicTacToe, setTicTacToe } = Ctx();
  const [modalType, setModalType] = useState('');

  // Reset game if new game is started
  useEffect(() => {
    if (isNewGame) {
      setTicTacToe({
        ...TicTacToe,
        boardCells: Array(9).fill(null),
        isWinner: false,
        currentPlayer: 'X',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset game function
  const handleOnConfirm = () => {
    setTicTacToe({
      ...TicTacToe,
      boardCells: Array(9).fill(null),
      isWinner: false,
      currentPlayer: 'X',
    });
    setIsModalOpen(false);
  };

  // Modal open function
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const modalContent = GetModalContent(modalType);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <GameHeader setIsModalOpen={openModal} />
        <Board setIsModalOpen={openModal} />
        <Footer />
        {isModalOpen && (
          <Modal
            title={modalContent.title}
            subtitle={modalContent.subtitle}
            confirmText={modalContent.confirmText}
            cancelText={modalContent.cancelText}
            SvgComponent={modalContent.SvgComponent}
            svgColor={modalContent.svgColor}
            onConfirm={handleOnConfirm}
            onCancel={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TicTacToeGame;
