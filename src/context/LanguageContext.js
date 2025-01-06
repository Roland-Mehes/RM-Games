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
  const lStore = localStorage.getItem('language') || 'English'; // just to keep selectedLanguage in one line ....

  const [selectedLanguage, setSelectedLanguage] = useState(lStore);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [languageData, setLanguageData] = useState({});

  const languages = {
    English: { data: enData, lang: enLang },
    Hungarian: { data: huData, lang: huLang },
    Romanian: { data: roData, lang: roLang },
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
  };

  return (
    <LanguageContext.Provider value={exportValues}>
      {children}
    </LanguageContext.Provider>
  );
};

export const Ctx = () => useContext(LanguageContext);
