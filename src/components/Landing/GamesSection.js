import React from 'react';
import { Link } from 'react-router-dom';
import './GamesSection.css';

const GameCard = ({
  title,
  description,
  link,
  imgSrc,
  imgWidth,
  imgHeight,
}) => (
  <div className="game-card">
    <h3>{title}</h3>
    <img
      src={imgSrc}
      alt="img"
      style={{ width: imgWidth, height: imgHeight, margin: 'auto' }}
    ></img>
    {/* <p>{description}</p> */}
    <Link to={link} className="play-button">
      Játssz most!
    </Link>
  </div>
);

const GamesSection = () => {
  return (
    <section className="games-section">
      <h2>Játékok</h2>
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
        />
        <GameCard
          title="Memória játék"
          imgSrc={'./img/memory-game2.png'}
          imgWidth="70px"
          imgHeight="70px"
          description="Találd meg a párokat a legkevesebb lépésben!"
          link="/memory"
        />
      </div>
    </section>
  );
};

export default GamesSection;
