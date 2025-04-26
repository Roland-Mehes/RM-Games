import React from 'react';
import styles from './Styles/allGamesStyle.module.css';
import gamesData from '../components/data/gamesData';
import { Ctx } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
const AllGames = () => {
  const { selectedLanguage, languages } = Ctx();
  const { lang } = languages[selectedLanguage];

  const navigate = useNavigate();

  const getDescription = (title) => {
    const key = title.toLowerCase().replace(' ', '') + 'Description';
    return lang[key] || 'No description available';
  };

  return (
    <section className={styles.allGamesSection}>
      <h2>All Games</h2>
      <div className={styles.allGamesList}>
        {gamesData.map((game, idx) => (
          <div
            key={idx}
            className={game.disabled ? styles.disabled : styles.allGameCard}
            onClick={() => !game.disabled && navigate(game.link)}
          >
            <div className={styles.imageContainer}>
              <img
                src={game.imgSrc}
                alt={game.title}
                width={game.imgWidth}
                height={game.imgHeight}
              />
            </div>
            <div className={styles.textContainer}>
              <h3>{game.title}</h3>
              <p>{game.description || getDescription(game.title)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllGames;
