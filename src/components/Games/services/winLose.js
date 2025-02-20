import { useState, useEffect } from 'react';
import style from './winLose.module.css';
import { Ctx } from '../../../context/LanguageContext';

const WinLose = ({ game, win, lose, userStats }) => {
  const [scoreMSG, setScoreMSG] = useState(null);
  const [score, setScore] = useState(null);

  const { selectedLanguage, languages } = Ctx();
  const { lang } = languages[selectedLanguage];

  useEffect(() => {
    if (userStats) {
      if (win) {
        setScore(userStats?.win);
        setScoreMSG(lang.scoreMsgWin);
      } else if (lose) {
        setScore(userStats?.lose);
        setScoreMSG(lang.scoreMsgLose);
      }
    }
  }, [userStats, win, lose, lang]);

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
