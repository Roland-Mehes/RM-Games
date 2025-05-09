import { signup } from '../fbServices/fbAuth';
import styles from './Styles/auth.module.css';
import { writeUserData } from '../fbServices/fbDB';
import { Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Ctx } from '../context/LanguageContext';
import { TfiEye } from 'react-icons/tfi';
import { RxEyeClosed } from 'react-icons/rx';
import { usePasswordVisible } from '../components/customHooks/validator';

const Signup = () => {
  const [warningMSG, setWarningMSG] = useState('');
  const { setUserName, languages, selectedLanguage } = Ctx();
  const { lang } = languages[selectedLanguage];
  const { isPasswordVisible, togglePasswordVisibility } = usePasswordVisible();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const username = formData.get('username');
    const psw = formData.get('psw');

    if (psw.length < 6) {
      setWarningMSG('Password must be at least 6 characters long.');
      return;
    }

    try {
      const userCredential = await signup(email, psw);
      const user = userCredential.user;

      await writeUserData(user.uid, {
        email: user.email,
        username: username,
        createdAt: Timestamp.now(),
        wordle: { win: 0, lose: 0 },
        hangman: { win: 0, lose: 0 },
      });

      setUserName({ uid: user.uid, email: user.email, username });
      setWarningMSG('User registered successfully!');
    } catch (error) {
      setWarningMSG('Signup failed: ' + error.message);
    }
  };

  return (
    <div className={styles['login-container']}>
      <form onSubmit={handleSubmit}>
        <h3 className={styles.title}>{lang.signUpHeader}</h3>
        <h5 className={styles.warningMSG}>{warningMSG}</h5>

        <div className={styles['input-wrapper']}>
          <input
            className={styles.customInput}
            type="email"
            name="email"
            autoComplete="email"
            placeholder=" "
            required
          />
          <label className={styles['floating-label']}>Email</label>
        </div>

        <div className={styles['input-wrapper']}>
          <input
            className={styles.customInput}
            type="text"
            name="username"
            autoComplete="username"
            placeholder=" "
            required
            minLength={4}
          />
          <label className={styles['floating-label']}>Username</label>
        </div>

        <div className={styles['input-wrapper']}>
          <input
            className={styles.customInput}
            type={isPasswordVisible ? 'text' : 'password'}
            name="psw"
            autoComplete="current-password"
            placeholder=" "
            required
            minLength={6}
          />
          <label className={styles['floating-label']}>Password</label>
          {isPasswordVisible ? (
            <TfiEye
              className={`${styles['password-icon']} ${styles['password-visible']}`}
              onClick={togglePasswordVisibility}
            />
          ) : (
            <RxEyeClosed
              className={styles['password-icon']}
              onClick={togglePasswordVisibility}
            />
          )}
        </div>

        <button type="submit" style={{ alignSelf: 'center' }}>
          {lang.signUpButton}
        </button>

        <div style={{ margin: '.5rem auto 0', display: 'flex', width: '100%' }}>
          <h5 style={{ margin: 'auto' }}>
            {lang.alreadySignedUp} <Link to="../login">{lang.hereLink}</Link>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Signup;
