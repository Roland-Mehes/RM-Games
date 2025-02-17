import { useState, useEffect } from 'react';
import { writeUserData, readUserData } from '../../../../fbServices/fbDB';

const useFirebase = (userName, localStats, isWinner, isLoser) => {
  const [userStats, setUserStats] = useState(localStats);

  // Fetch user stats from Firebase
  useEffect(() => {
    const fetchUserStats = async () => {
      if (userName?.uid) {
        const res = await readUserData(userName.uid);
        setUserStats({
          win: res?.hangman?.win || 0,
          lose: res?.hangman?.lose || 0,
        });
      }
    };

    if (userName?.uid) {
      fetchUserStats();
    }
  }, [userName]);

  // Write to Firebase when the game ends
  useEffect(() => {
    const updateUserStats = async () => {
      if (userName?.uid && (isWinner || isLoser)) {
        await writeUserData(userName.uid, { hangman: userStats });
      }
    };

    if (isWinner || isLoser) {
      updateUserStats();
    }
  }, [isWinner, isLoser, userName, userStats]);

  return { userStats, setUserStats };
};

export default useFirebase;
