import './GamesSection.css';
import React from 'react';
import { Ctx } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

const GamesSection = () => {
  const { languageData } = Ctx();
  const { gameSectionHeader } = languageData;

  return (
    <section className="games-section">
      <h2>{gameSectionHeader}</h2>
      <div className="games-list">
        <GameCard
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
        <GameCard
          title="Hangman"
          imgSrc={'./img/hangman.png'}
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

const GameCard = ({
  title,
  description,
  link,
  imgSrc,
  imgWidth,
  imgHeight,
  BtnDisabled,
}) => {
  const { languageData } = Ctx();
  const { playBtn } = languageData;

  return (
    <div className="game-card">
      <h3>{title}</h3>
      <img
        src={imgSrc}
        alt="img"
        style={{ width: imgWidth, height: imgHeight, margin: 'auto' }}
      ></img>
      {/* <p>{description}</p> */}
      <Link
        to={BtnDisabled ? '#' : link}
        className={BtnDisabled ? 'play-button disabled' : 'play-button'}
      >
        {playBtn}
      </Link>
    </div>
  );
};

export default GamesSection;
