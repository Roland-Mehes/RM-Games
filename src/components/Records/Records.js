import React, { useEffect, useState } from 'react';
import { db } from '../../fbServices/fb';
import { collection, getDocs } from 'firebase/firestore';
import styles from './records.module.css';
import { IoPlayForward } from 'react-icons/io5';
import { IoPlayBackSharp } from 'react-icons/io5';
import { Ctx } from '../../context/LanguageContext';
import SortIcon from './sortConfig';

const Records = () => {
  const [selectedGame, setSelectedGame] = useState('');
  const [games, setGames] = useState([]);
  const [userStats, setUserStats] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const { languages, selectedLanguage } = Ctx();
  const { lang } = languages[selectedLanguage];

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

    // Jump to the first page after changeing games

    // setCurrentPage(0);

    // After game select keep the previous sorting order if [sortConfig.key] is not empty
    if (sortConfig.key) {
      userStatsArray.sort((a, b) => {
        if (sortConfig.direction === 'asc') {
          return a[sortConfig.key] - b[sortConfig.key];
        } else {
          return b[sortConfig.key] - a[sortConfig.key];
        }
      });
    }
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

  const paginationIncrementer = () => {
    if (nextPage < userStats.length) {
      setCurrentPage((prev) => prev + 5);
      setNextPage((prev) => prev + 5);
    }
  };

  const paginationDecrementer = () => {
    if (currentPage !== 0) {
      setCurrentPage((prev) => prev - 5);
      setNextPage((prev) => prev - 5);
    }
  };

  // SORTING
  const sort = (key) => {
    const newDirection =
      sortConfig.key === key && sortConfig.direction === 'dec' ? 'asc' : 'dec';

    const sortedStats = [...userStats].sort((a, b) => {
      if (newDirection === 'asc') {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });

    setUserStats(sortedStats);
    setSortConfig({ key, direction: newDirection });
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
        {lang.recordHeader}
      </h2>

      {/* Dropdown menu */}
      <select
        onChange={handleGameSelection}
        value={selectedGame}
        className={styles['select']}
      >
        <option value="">{lang.recordSelect}</option>
        {games.map((game) => (
          <option key={game} value={game}>
            {game.charAt(0).toUpperCase() + game.slice(1)}
          </option>
        ))}
      </select>

      {/* Render data based on select */}
      {userStats.length > 0 && (
        <div className={styles['table_component']} role="region" tabIndex="0">
          <table>
            <caption>
              {selectedGame.charAt(0).toUpperCase() + selectedGame.slice(1)}
            </caption>
            <thead>
              <tr>
                <th>User</th>
                <th style={{ cursor: 'pointer' }} onClick={() => sort('win')}>
                  {lang.scoreMsgWin}
                  <SortIcon columnKey="win" sortConfig={sortConfig} />
                </th>
                <th style={{ cursor: 'pointer' }} onClick={() => sort('lose')}>
                  {lang.scoreMsgLose}
                  <SortIcon columnKey="lose" sortConfig={sortConfig} />
                </th>
              </tr>
            </thead>
            <tbody>
              {userStats.slice(currentPage, nextPage).map((user) => (
                <tr>
                  <>
                    <td>
                      {user.username.charAt(0).toUpperCase() +
                        user.username.slice(1)}
                    </td>
                    <td>{user.win} </td>
                    <td>{user.lose}</td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.paginationContainer}>
            <IoPlayBackSharp
              className={styles.paginationButton}
              onClick={paginationDecrementer}
            />

            <div className={styles.pageNumberContainer}>
              <span className={styles.pageLabel}></span>
              <span className={styles.pageNumber}>
                {Math.floor(currentPage / 5) + 1}
              </span>
            </div>

            <IoPlayForward
              className={styles.paginationButton}
              onClick={paginationIncrementer}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Records;
