import { useState } from 'react';
import './signup.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { username, email, password, wins: 0, losses: 0 };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="sign-up-forn-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="sign-up-input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="sign-up-input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="sign-up-input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="sign-up-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
