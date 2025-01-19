import { Ctx } from '../../context/LanguageContext';
import './records.css';

const Records = () => {
  const { userName } = Ctx();

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const currentUser = users.find(
    (user) => user.username.toLowerCase() === userName.toLowerCase()
  );

  return (
    <div className="records-container">
      {userName ? (
        <div>
          <select>
            <option>Val1</option>
            <option>Val1</option>
            <option>Val1</option>
          </select>
          <div>
            <div className="container-win">
              <p>
                Win : <span>{currentUser.wins}</span>
              </p>
            </div>
            <div className="container-lose">
              <p>
                Losses : <span>{currentUser.losses}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Render the whole Record list with all the Users

        <table style={{ borderCollapse: 'collapse' }}>
          <caption>
            [CurrentGame]
            <select>
              <option> Games</option>
            </select>
          </caption>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.username + idx}>
                <td>{user.username}</td>
                <td>{user.wins}</td>
                <td>{user.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Records;
