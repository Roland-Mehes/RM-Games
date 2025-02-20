import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../fbServices/fb';
import { useState } from 'react';

export const useFetchUserStats = async (game) => {
  const [userStats, setUserStats] = useState({ win: 0, lose: 0 });

  const userStatsArray = [];
  const querySnapshot = await getDocs(collection(db, 'users'));

  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    if (userData[game]) {
      userStatsArray.push({
        username: userData.username,
        win: userData[game].win,
        lose: userData[game].lose,
      });
    }
  });
  setUserStats(userStatsArray);
  return { userStats, userStatsArray };
};
