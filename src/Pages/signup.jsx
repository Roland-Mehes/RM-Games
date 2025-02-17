import { signup } from '../fbServices/fbAuth';
import styles from './Styles/auth.module.css';
import { writeUserData } from '../fbServices/fbDB';
import { Timestamp } from 'firebase/firestore';

const Signup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const username = formData.get('username');
    const psw = formData.get('psw');

    if (psw.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    try {
      const userCredential = await signup(email, psw);
      const user = userCredential.user; // Firebase Authentication User

      await writeUserData(user.uid, {
        email: user.email,
        username: username,
        createdAt: Timestamp.now(),
        wordle: {
          win: 0,
          lose: 0,
        },
        hangman: {
          win: 0,
          lose: 0,
        },
      });

      console.log('User registered and data saved:', user);
    } catch (error) {
      alert('Signup failed: ' + error.message);
    }
  };

  return (
    <div className={styles['login-container']}>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input
          type="text"
          name="username"
          placeholder=" Username"
          autoComplete="username"
        />
        <input
          type="password"
          name="psw"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button type="submit" style={{ alignSelf: 'center' }}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
