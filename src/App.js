import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/store';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp.js';
import LogIn from './components/LogIn/LogIn';
import Wordle from './components/Games/Wordle/Game.js';
import Sudoku from './components/Games/Sudoku/sudokuGame.js';
import Records from './components/Records/Records.js';
import Home from './Pages/Home';
import Footer from './components/footer/footer';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />{' '}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/records" element={<Records />} />
          <Route path="/Wordle" element={<Wordle />} />
          <Route path="/Sudoku" element={<Sudoku />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
