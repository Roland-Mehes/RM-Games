import { createContext, useContext, useEffect, useState } from 'react';
import {
  wordleLang as enData,
  webLang as enLang,
  enKeyboard,
} from '../locales/en';
import {
  wordleLang as huData,
  webLang as huLang,
  huKeyboard,
} from '../locales/hu';
import {
  wordleLang as roData,
  webLang as roLang,
  roKeyboard,
} from '../locales/ro';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const lStore = localStorage.getItem('language') || 'English'; // just to keep selectedLanguage state in one line ....

  const [selectedLanguage, setSelectedLanguage] = useState(lStore);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [languageData, setLanguageData] = useState({});
  const [currentGame, setCurrentGame] = useState('');

  // This is the context that will be used in TicTacToe
  const [TicTacToe, setTicTacToe] = useState({
    currentPlayer: 'X',
    boardCells: Array(9).fill(null),
    isWinner: false,
    gameMode: 'cpu', // cpu or player
    player1Marker: 'O',
  });

  const languages = {
    English: { data: enData, lang: enLang, keyboard: enKeyboard },
    Hungarian: { data: huData, lang: huLang, keyboard: huKeyboard },
    Romanian: { data: roData, lang: roLang, keyboard: roKeyboard },
  };

  useEffect(() => {
    const langData = languages[selectedLanguage];
    if (langData) {
      setLanguageData({
        //Header
        gameButton: langData.gameButton,
        logoutButton: langData.LogoutButton,
        records: langData.records,
        //Wordle
        selectedWords: langData.data.words,
        wins: langData.wins,
        losses: langData.losses,
        //Landing Page Hero section
        heroTextHeader: langData.lang.heroTextHeader,
        heroTextParagraph: langData.lang.heroTextParagraph,
        //Landing Page Game Section
        gameSectionHeader: langData.lang.gameSectionHeader,
        playBtn: langData.lang.playBtn,
        // Landing Page Benefits
        benefitsHeader: langData.lang.benefitsHeader,
        benefitsContent: langData.lang.benefitsContent,
        keyboard: langData.keyboard,
      });
    }
    localStorage.setItem('language', selectedLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage]);

  const exportValues = {
    selectedLanguage,
    setSelectedLanguage,
    isLoggedIn,
    setIsLoggedIn,
    userName,
    setUserName,
    languages,
    languageData,
    currentGame,
    setCurrentGame,
    TicTacToe,
    setTicTacToe,
  };

  return (
    <LanguageContext.Provider value={exportValues}>
      {children}
    </LanguageContext.Provider>
  );
};

export const Ctx = () => useContext(LanguageContext);
