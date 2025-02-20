import { wordsList } from './enWordsList';

export const webLang = {
  // text for header
  gameButton: 'Games',
  LogoutButton: 'Logout',
  records: 'Records',
  signUp: 'Regisztrálás',

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

  wordleRules: {
    title: '🪓 Wordle Game Guide',
    description:
      'The goal of the Wordle game is to guess the 5-letter word in 6 attempts. After each attempt, we receive the following feedback:',
    rules: [
      'HELLO - The first four characters match the word',
      '"H" and "E" are green because they are in the correct position',
      '"L" and "L" are yellow because they are in the word but in a different position',
      '"O" is gray because it is not in the word.',
    ],
    lose: 'WORLD - If we make a mistake, the game notifies us with a red error animation.',
  },

  //Common game Text
  gameOverText: 'Try Again 😢',
  scoreMsgWin: 'Wins',
  scoreMsgLose: 'Losses',

  // text for Hangman Modal
  hangmanGuessTheWord: 'Guess the Word',
  hangmanWin: 'Congratulation 🏆',

  hangmanRules: {
    title: '🪓 Hangman Rules',
    description:
      'The goal of the Hangman game is to guess the secret word letter by letter.',
    rules: [
      'For each incorrect guess, a part of the figure is drawn: 😶 head, 🥼 body, ✋ arms, and 🦵 legs.',
      '💀 If the figure is completely drawn, you lose.',
      '🏆 If you guess the word before the figure is complete, you win!',
    ],
  },
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
