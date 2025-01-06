import { useState } from 'react';
import { Ctx } from '../../context/LanguageContext';
import './login.css';

const LogIn = () => {
  const { setIsLoggedIn, setUserName } = Ctx();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warningMSG, setWarningMSG] = useState('');
  const [warningMSGcolor, setWarningMSGcolor] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) =>
        (u.username === username || u.email === username) &&
        u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setUserName(
        user.username.charAt(0).toUpperCase() + user.username.slice(1)
      );
      setWarningMSG('Login successful!');
      setWarningMSGcolor('green');
    } else {
      setWarningMSGcolor('red');
      setWarningMSG('Invalid username or password!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <p style={{ color: warningMSGcolor }}>{warningMSG}</p>
        <h1>Log In</h1>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
