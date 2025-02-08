import { useRef } from 'react';
import { login, rememberMe, resetPassword } from '../fbServices/fbAuth';
import { Ctx } from '../context/LanguageContext';
import styles from './Styles/auth.module.css';

const Login = () => {
  const { setIsLoggedIn } = Ctx();

  const formRef = useRef();
  const persisitenceRef = useRef();

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
          console.log('email or pass is wrong');
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
        <input type="email" name="email" placeholder="Type Your Email" />
        <input type="password" name="psw" placeholder="Type Your Password" />
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
      </form>
    </div>
  );
};

export default Login;
