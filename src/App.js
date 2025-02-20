import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.js';
import Header from './components/Header/Header';
import Signup from './Pages/signup.jsx';
import Login from './Pages/login.jsx';
import Wordle from './components/Games/Wordle/Game.js';
import Sudoku from './components/Games/Sudoku/sudokuGame.js';
import Records from './components/Records/Records.js';
import Home from './Pages/Home';
import Footer from './components/footer/footer';
import Hangman from './Pages/Hangman.js';
import AllGames from './Pages/AllGames.jsx';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />{' '}
          <Route path="/games" element={<AllGames />} />{' '}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/records" element={<Records />} />
          <Route path="/Wordle" element={<Wordle />} />
          <Route path="/Sudoku" element={<Sudoku />} />
          <Route path="/Hangman" element={<Hangman />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
