import React from 'react';
import GameCard from './GameCard';
import './GamesSection.css';
import { Ctx } from '../../context/LanguageContext';

const GamesSection = () => {
  const { languageData } = Ctx();
  const { gameSectionHeader } = languageData;

  return (
    <section className="games-section">
      <h2>{gameSectionHeader}</h2>
      <div className="games-list">
        <GameCard
          title="Wordle"
          imgSrc="./img/wordle.png"
          imgWidth="auto"
          imgHeight="2rem"
          // description=""
          link="/Wordle"
        />
        <GameCard
          title="Sudoku"
          imgSrc={'./img/sudoku.jpg'}
          imgWidth="70px"
          imgHeight="70px"
          // description=""
          link="/sudoku"
          BtnDisabled={true}
        />
        <GameCard
          title="Memory"
          imgSrc={'./img/memory-game2.png'}
          imgWidth="70px"
          imgHeight="70px"
          // description=""
          link="/memory"
          BtnDisabled={true}
        />
      </div>
    </section>
  );
};

export default GamesSection;
