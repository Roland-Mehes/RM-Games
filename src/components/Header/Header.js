import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ctx } from '../../context/store';
import './header.css';

const Header = () => {
  const {
    selectedLanguage,
    setSelectedLanguage,
    isLoggedIn,
    userName,
    setIsLoggedIn,
    languages,
    languageData,
  } = Ctx();

  const { records, gameButton, LogoutButton } = languageData;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">MR-Game App</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/play" onClick={toggleMenu}>
            {gameButton}
          </Link>
          <Link to="/records" onClick={toggleMenu}>
            {records}
          </Link>
          {isLoggedIn ? (
            <>
              <span className="user-name">{`Welcome, ${userName}`}</span>
              <p className="logout" onClick={logout}>
                {LogoutButton}
              </p>
            </>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu}>
                Login
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                Sign Up
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
