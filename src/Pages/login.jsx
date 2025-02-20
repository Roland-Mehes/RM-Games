import { useRef, useState } from 'react';
import { login, rememberMe, resetPassword } from '../fbServices/fbAuth';
import { Ctx } from '../context/LanguageContext';
import styles from './Styles/auth.module.css';
import { Link } from 'react-router-dom';
import { usePasswordVisible } from '../components/customHooks/validator';
import { TfiEye } from 'react-icons/tfi';
import { RxEyeClosed } from 'react-icons/rx';

const Login = () => {
  const { setIsLoggedIn } = Ctx();

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
        .then((res) => {
          setIsLoggedIn(true);
        })
        .catch((error) => {
          setWarningMSG('Email or pass is wrong');
          return error;
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
        <h3 className={styles.title}>Login</h3>
        <h5 className={styles.warningMSG}>{warningMSG}</h5>
        <input
          type="email"
          autoComplete="email"
          name="email"
          placeholder="Type Your Email"
          required
        />
        <div className={styles['password-container']}>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            name="psw"
            autoComplete="curent-password"
            placeholder="Type Your Password"
            required
            minLength={6}
          />
          {!isPasswordVisible ? (
            <TfiEye
              className={styles['password-icon']}
              onClick={() => togglePasswordVisibility()}
            />
          ) : (
            <RxEyeClosed
              className={styles['password-icon']}
              onClick={() => togglePasswordVisibility()}
            />
          )}
        </div>
        <div className={styles['remember-me']}>
          <input type="checkbox" ref={persisitenceRef} />
          <label>Remember Me</label>
        </div>
        <div className={styles.btnContainer}>
          <button type="submit">Login</button>
          <button
            onClick={handleForgetPsw}
            className={styles['btn-forget-psw']}
          >
            Forget password
          </button>
        </div>
        <div style={{ margin: '.5rem auto 0', display: 'flex', width: '100%' }}>
          <h5 style={{ margin: 'auto' }}>
            Dont have Account? Lets make one <Link to="../signup">here.</Link>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
