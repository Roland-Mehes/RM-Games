import React, { useEffect, useState } from 'react';
import { db } from '../../fbServices/fb';
import { collection, getDocs } from 'firebase/firestore';
import styles from './records.module.css';

const Records = () => {
  const [selectedGame, setSelectedGame] = useState('');
  const [games, setGames] = useState([]);
  const [userStats, setUserStats] = useState([]);

  // fecthcing the game names
  useEffect(() => {
    const fetchGames = async () => {
      // adding the WORDLE and HANGMAN to the select[state]
      setGames(['wordle', 'hangman']);
    };
    fetchGames();
  }, []);

  // Return the value based on select
  const fetchUserStats = async (game) => {
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
  };

  // Dropdown handleing
  const handleGameSelection = (event) => {
    const selected = event.target.value;
    setSelectedGame(selected);
    if (selected) {
      fetchUserStats(selected);
    } else {
      setUserStats([]);
    }
  };

  return (
    <div className={styles['records-container']}>
      <h2
        style={{
          textAlign: 'center',
          borderBottom: '1px solid #fff',
          marginBottom: '1rem',
        }}
      >
        Game Statistics
      </h2>

      {/* Dropdown menu */}
      <select
        onChange={handleGameSelection}
        value={selectedGame}
        className={styles['select']}
      >
        <option value="">Select Game</option>
        {games.map((game) => (
          <option key={game} value={game}>
            {game.charAt(0).toUpperCase() + game.slice(1)}
          </option>
        ))}
      </select>

      {/* Render data based on select */}
      {userStats.length > 0 && (
        <div className={styles['records-content']}>
          <h3>{selectedGame} Statistics</h3>
          <ul>
            {userStats.map((user) => (
              <li key={user.username}>
                <strong>{user.username}</strong>: {user.win} Wins, {user.lose}{' '}
                Losses
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Records;
