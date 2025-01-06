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
        <div className="records-container">
          <h1> {records}</h1>
          <p>
            {wins}: {currentUser.wins}
          </p>
          <p>
            {losses}: {currentUser.losses}
          </p>
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
