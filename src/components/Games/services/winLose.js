import { useState, useEffect } from 'react';
import style from './winLose.module.css';

const WinLose = ({ game, win, lose, userStats }) => {
  const [scoreMSG, setScoreMSG] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (userStats) {
      if (win) {
        setScore(userStats?.win);
        setScoreMSG('WINS');
      } else if (lose) {
        setScore(userStats?.lose);
        setScoreMSG('LOSSES');
      }
    }
  }, [userStats, win, lose]);

  if (score === null) {
    return <div className={style['scoreMSG']}>Loading...</div>;
  }

  return (
    <div className={style['scoreMSG']}>
      {score !== null ? `${scoreMSG} : ${score}` : ''}
    </div>
  );
};

export default WinLose;
