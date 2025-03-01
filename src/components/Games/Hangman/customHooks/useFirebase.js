import { useState, useEffect } from 'react';
import { writeUserData, readUserData } from '../../../../fbServices/fbDB';

const useFirebase = (userName, localStats, gameName, isWinner, isLoser) => {
  const [userStats, setUserStats] = useState(localStats);

  // Fetch user stats from Firebase
  useEffect(() => {
    const fetchUserStats = async () => {
      if (userName?.uid) {
        const res = await readUserData(userName.uid);
        setUserStats({
          win: res?.[gameName]?.win || 0,
          lose: res?.[gameName]?.lose || 0,
        });
      }
    };

    if (userName?.uid) {
      fetchUserStats();
    }
  }, [userName, gameName]);

  // Write to Firebase when the game ends
  useEffect(() => {
    const updateUserStats = async () => {
      try {
        if (userName?.uid && (isWinner || isLoser)) {
          await writeUserData(userName.uid, { [gameName]: userStats });
        }
      } catch (error) {
        console.error('Error writing user data: ', error);
      }
    };

    if (isWinner || isLoser) {
      updateUserStats();
    }
    // eslint-disable-next-line
  }, [isWinner, isLoser, userName]); //

  return { userStats, setUserStats, userName };
};

export default useFirebase;
