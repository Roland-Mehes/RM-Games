import { wordsList } from './enWordsList';

export const wordleLang = {
  words: wordsList
    .trim()
    .split('\n')
    .filter((word) => word.length === 5),
  howToPlay: `Guess the word in 6 tries. Each guess must be a valid 5-letter word. The color of the tiles will change to show how close your guess was to the word.`,

  wins: 'Wins',
  losses: 'Losses',
};

export const webLang = {
  gameButton: 'Game',
  LogoutButton: 'Logout',
  records: 'Records',
};
