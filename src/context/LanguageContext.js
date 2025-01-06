import { createContext, useContext, useEffect, useState } from 'react';
import {
  wordleLang as enData,
  webLang as enLang,
} from '../components/Games/Wordle/words-JSON/en';
import {
  wordleLang as huData,
  webLang as huLang,
} from '../components/Games/Wordle/words-JSON/hu';
import {
  wordleLang as roData,
  webLang as roLang,
} from '../components/Games/Wordle/words-JSON/ro';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('language') || 'English'
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  // const [selectedWords, setSelectedWords] = useState([]);
  // const [howToPlay, setHowToPlay] = useState('');
  // const [gameButton, setGameButton] = useState();
  // const [LogoutButton, setLogoutButton] = useState();
  // const [records, setRecords] = useState();
  // const [wins, setWins] = useState();
  // const [losses, setLosses] = useState();

  const [languageData, setLanguageData] = useState({
    selectedWords: [],
    howToPlay: '',
    gameButton: '',
    logoutButton: '',
    records: '',
    wins: '',
    losses: '',
  });

  const languages = {
    English: { data: enData, lang: enLang },
    Hungarian: { data: huData, lang: huLang },
    Romanian: { data: roData, lang: roLang },
  };

  useEffect(() => {
    const data = languages[selectedLanguage];
    if (data) {
      // setSelectedWords(languageData.words);
      // setHowToPlay(languageData.howToPlay);
      // setGameButton(languageData.gameBut ton);
      // setLogoutButton(languageData.LogoutButton);
      // setRecords(languageData.records);
      // setWins(languageData.wins);
      // setLosses(languageData.losses);
      setLanguageData({
        selectedWords: data.data.words,
        howToPlay: data.howToPlay,
        gameButton: data.gameButton,
        logoutButton: data.LogoutButton,
        records: data.records,
        wins: data.wins,
        losses: data.losses,
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
    languageData, // now is one instead over nince thousand ...
    // selectedWords,
    // howToPlay,
    // gameButton,
    // LogoutButton,
    // records,
    // wins,
    // losses,
  };

  return (
    <LanguageContext.Provider value={exportValues}>
      {children}
    </LanguageContext.Provider>
  );
};

export const Ctx = () => useContext(LanguageContext);
