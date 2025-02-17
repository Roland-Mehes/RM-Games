import { useCallback } from 'react';
import { Ctx } from '../../../../context/LanguageContext';

export const useRandomWordGenerator = () => {
  const { languageData } = Ctx();
  const { selectedWords } = languageData;

  const randomWord = useCallback(() => {
    if (selectedWords && selectedWords.length > 0) {
      return selectedWords[Math.floor(Math.random() * selectedWords.length)];
    }
    return '';
  }, [selectedWords]);

  return randomWord;
};
