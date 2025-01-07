import { Link } from 'react-router-dom';
import { Ctx } from '../../context/LanguageContext';

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

export default GameCard;
