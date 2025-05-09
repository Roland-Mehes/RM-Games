import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ctx } from '../../context/LanguageContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../fbServices/fb';
import { logout } from '../../fbServices/fbAuth';
import './header.css';
import { useHandleDisplayUserName } from '../customHooks/useFetchUserName';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const displayUserName = useHandleDisplayUserName();

  const {
    selectedLanguage,
    setSelectedLanguage,
    languages,
    isLoggedIn,
    setIsLoggedIn,
    setUserName,
  } = Ctx();

  const { lang } = languages[selectedLanguage];

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log('>>>on auth state change>>>', user.email);
        setUserName({ uid, email: user.email });
        setIsLoggedIn(true);
        navigate('/');
        // ...
      } else {
        // User is signed out
        setUserName(null);
        setIsLoggedIn(false);
      }
    });

    // Make sure the hamburger menu wont open automaticly
    const handleResize = () => {
      if (window.innerWidth > 830) {
        setIsMenuOpen(false); // Bezárjuk a menüt, ha visszalépünk nagyobb nézetbe
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

    // eslint-disable-next-line
  }, []);

  const deAuth = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">RM-Games</Link>
        </div>
        <p className="header-username">{displayUserName}</p>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/games" onClick={toggleMenu}>
            {lang.gameButton}
          </Link>
          <Link to="/records" onClick={toggleMenu}>
            {lang.records}
          </Link>
          {isLoggedIn ? (
            <p onClick={deAuth}>LogOut</p>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu}>
                Login
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                {lang.signUp}
              </Link>
            </>
          )}
          <select
            className="language-selector"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            {Object.keys(languages).map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
