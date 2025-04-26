import { Link } from 'react-router-dom';

const GameCard = ({
  title,
  description,
  link,
  imgSrc,
  imgWidth,
  imgHeight,
  BtnDisabled,
}) => {
  return (
    <>
      <div className={BtnDisabled ? 'game-card-disabled' : 'game-card'}>
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
          ▶ Play
        </Link>
      </div>
    </>
  );
};

export default GameCard;
