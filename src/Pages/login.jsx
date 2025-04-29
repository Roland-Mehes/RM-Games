import { useRef, useState } from 'react';
import { login, rememberMe, resetPassword } from '../fbServices/fbAuth';
import { Ctx } from '../context/LanguageContext';
import styles from './Styles/auth.module.css';
import { Link } from 'react-router-dom';
import { usePasswordVisible } from '../components/customHooks/validator';
import { TfiEye } from 'react-icons/tfi';
import { RxEyeClosed } from 'react-icons/rx';

const Login = () => {
  const { setIsLoggedIn, languages, selectedLanguage } = Ctx();
  const { lang } = languages[selectedLanguage];

  const [warningMSG, setWarningMSG] = useState('');
  const formRef = useRef();
  const persisitenceRef = useRef();
  const { isPasswordVisible, togglePasswordVisibility } = usePasswordVisible();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const psw = formData.get('psw');
    if (persisitenceRef.current.checked) {
      rememberMe(email, psw);
    } else {
      login(email, psw)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch(() => {
          setWarningMSG(lang.loginErrorMSG);
        });
    }
  };

  const handleForgetPsw = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    resetPassword(email);
  };

  return (
    <div className={styles['login-container']}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <h3 className={styles.title}>{lang.loginHeader}</h3>
        <h5 className={styles.warningMSG}>{warningMSG}</h5>

        <div className={styles['input-wrapper']}>
          <input
            className={styles.customInput}
            type="email"
            autoComplete="email"
            name="email"
            placeholder=" "
            required
          />
          <label className={styles['floating-label']}>Email</label>
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
              title="Hide Password"
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

        <div className={styles['remember-me']}>
          <input type="checkbox" ref={persisitenceRef} />
          <label>{lang.rememberMe}</label>
        </div>

        <div className={styles.btnContainer}>
          <button type="submit">{lang.login}</button>
          <button
            onClick={handleForgetPsw}
            className={styles['btn-forget-psw']}
          >
            {lang.forgetPassword}
          </button>
        </div>

        <div style={{ margin: '.5rem auto 0', display: 'flex', width: '100%' }}>
          <h5 style={{ margin: 'auto' }}>
            {lang.dontHaveAccount} <Link to="../signup">{lang.hereLink}</Link>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
