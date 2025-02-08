import { signup } from '../fbServices/fbAuth';
import styles from './Styles/auth.module.css';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const psw = formData.get('psw');
    signup(email, psw)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles['login-container']}>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Type Your Email" />
        <input type="password" name="psw" placeholder="Type Your Password" />
        <button type="submit" style={{ alignSelf: 'center' }}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
