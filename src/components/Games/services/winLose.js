import { useState, useEffect } from 'react';
import style from './winLose.module.css';
import { Ctx } from '../../../context/LanguageContext';

const WinLose = ({ game, win, lose, userStats, tie }) => {
  const [scoreMSG, setScoreMSG] = useState(null);
  const [score, setScore] = useState(null);

  const { selectedLanguage, languages } = Ctx();
  const { lang } = languages[selectedLanguage];

  useEffect(() => {
    if (userStats) {
      if (win) {
        setScoreMSG(lang.scoreMsgWin);
        setScore(userStats?.win);
      } else if (lose) {
        setScore(userStats?.lose);
        setScoreMSG(lang.scoreMsgLose);
      } else if (tie) {
        setScore(userStats?.tie);
        setScoreMSG('TIES');
      }
    }
  }, [userStats, win, lose, lang, tie]);

  if (score === null) {
    return <div className={style['scoreMSG']}>Loading...</div>;
  }

  return (
    <div className={style['scoreMSG']}>
      {score !== null &&
      (game !== 'TicTacToe' || win !== true || lose !== true) ? (
        `${scoreMSG} : ${score}`
      ) : (
        <span className={style.ticTacToe}>{score}</span>
      )}
    </div>
  );
};

export default WinLose;
