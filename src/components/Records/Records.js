import { Ctx } from '../../context/LanguageContext';
import './records.css';

const Records = () => {
  const { userName, languageData } = Ctx();
  const { records, wins, losses } = languageData;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const currentUser = users.find(
    (user) => user.username.toLowerCase() === userName.toLowerCase()
  );

  return (
    <div>
      {userName ? (
        <div
          className="records-container"
          style={{
            display: 'flex',
            alignContent: 'center',
            margin: '0 auto',
            width: '500px',
            flexDirection: 'column',
            marginTop: '2rem',
            justifyContent: 'center ',
          }}
        >
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
          {/* <select>
            <option>opt1</option>
            <option>opt2</option>
          </select>
          <h1>
            {' '}
            {records} for {userName}
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th>Wins</th>
                <th>Losses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{currentUser.wins}</td>
                <td>{currentUser.losses}</td>
                <td></td>
              </tr>
            </tbody>
          </table> */}
        </div>
      ) : (
        // Render the whole Record list with all the Users
        users.map((user, idx) => (
          <p key={user.username + idx}>{user.username}</p>
        ))
      )}
    </div>
  );
};

export default Records;
