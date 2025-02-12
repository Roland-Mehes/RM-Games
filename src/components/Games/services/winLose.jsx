import { useState } from 'react';
import { Ctx } from '../../../context/LanguageContext';
import { readUserData } from '../../../fbServices/fbDB';

const WinLose = ({ game, win, lose }) => {
  const { userName } = Ctx();
  const [score, setScore] = useState(null);
  const [scoreMSG, setScoreMSG] = useState(null);

  const logUserData = async () => {
    if (userName) {
      if (win) {
        const data = await readUserData(userName.uid);
        setScore(data[game].win);
        setScoreMSG('WINS');
      } else if (lose) {
        const data = await readUserData(userName.uid);
        setScore(data[game].lose);
        setScoreMSG('LOSSES');
      } else {
        console.log('no logged in user');
      }
    }
  };

  logUserData();

  return <div>{score !== null ? scoreMSG + ' : ' + score : ''}</div>;
};

export default WinLose;
