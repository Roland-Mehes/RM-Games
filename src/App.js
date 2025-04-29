import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Signup from './Pages/signup';
import Login from './Pages/login';
import Wordle from './components/Games/Wordle/Game';
import Sudoku from './Pages/Sudoku';
import Records from './components/Records/Records';
import Home from './Pages/Home';
import Footer from './components/footer/footer';
import Hangman from './Pages/Hangman';
import AllGames from './Pages/AllGames';
import TicTacToe from './Pages/TicTacToe';
import TicTacToeGame from './components/Games/TicTacToe/Game/Game';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<AllGames />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/records" element={<Records />} />
          <Route path="/Wordle" element={<Wordle />} />
          <Route path="/Sudoku" element={<Sudoku />} />
          <Route path="/Hangman" element={<Hangman />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/TicTacToeGame" element={<TicTacToeGame />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
