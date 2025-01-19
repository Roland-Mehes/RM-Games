import { Ctx } from '../../context/LanguageContext';
import './records.css';

const Records = () => {
  const { userName } = Ctx();

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const currentUser = users.find(
    (user) => user.username.toLowerCase() === userName.toLowerCase()
  );

  return (
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

        <>
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
        </>
      )}
    </div>

    // {users.map((user, idx) => (
    //         <td key={user.username + idx}>{user.username}</td>
    //       ))}
  );
};

export default Records;
