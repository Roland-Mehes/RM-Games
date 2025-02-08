import { wordsList } from './enWordsList';

export const webLang = {
  // text for header
  gameButton: 'Games',
  LogoutButton: 'Logout',
  records: 'Records',

  // text for the Hero section
  heroTextHeader: 'Play your favorite logic games!',
  heroTextParagraph:
    'Discover Wordle and other fun logic games. Daily challenges and entertaining puzzles await you!',

  // text for the Game section
  gameSectionHeader: 'Top Games',
  playBtn: 'Play Now!',

  //text for benefits
  benefitsHeader: 'Why is it worth playing??',
  benefitsContent: [
    'Develops logical thinking',
    'Challenges every day',
    'Excellent for fun and brain exercise',
  ],

  // text for Wordle Game
  wordleGuessTheWord: 'Try to guess the word',
  wordleWordIsNotInDatabase: 'This word is not in our List of Words',
  wordleGameOver: 'Game over.',

  //Common game Text
  gameOverText: 'Try Again',
};

export const enKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ['enter', 'backspace'],
];

export const wordleLang = {
  words: wordsList
    .trim()
    .split('\n')
    .filter((word) => word.length === 5),
  howToPlay: `Guess the word in 6 tries. Each guess must be a valid 5-letter word. The color of the tiles will change to show how close your guess was to the word.`,

  wins: 'Wins',
  losses: 'Losses',
};
