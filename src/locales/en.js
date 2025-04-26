import { wordsList } from './enWordsList';

export const webLang = {
  // text for navbar
  gameButton: 'Games',
  LogoutButton: 'Logout',
  records: 'Records',
  signUp: 'SignUp',

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

  // text for login

  loginHeader: 'Login',
  rememberMe: 'Remember Me',
  login: 'Login',
  forgetPassword: 'Forget Password',
  dontHaveAccount: 'Dont have Account? Lets make one ',
  hereLink: 'here.',
  loginErrorMSG: 'Email or password is wrong',

  // text for sign Up / Register

  signUpHeader: 'Sign Up',
  signUpButton: 'Sign Up',
  alreadySignedUp: 'Already have account? Sign in ',

  //Record Page

  recordHeader: 'Statistics',
  recordSelect: 'Select Game',

  // All Games :
  wordleDescription:
    'Wordle is a fun word game where you must guess a 5-letter word within 6 tries. Each attempt gives you feedback about how close you were to the correct word.',

  sudokuDescription:
    'Sudoku is a classic logic game where you need to fill a 9x9 grid so that every row, column, and 3x3 box contains the numbers 1-9 exactly once.',

  tictactoeDescription:
    'Tic Tac Toe is a simple and engaging two-player game where the goal is to align three identical symbols (X or O) in a row, column, or diagonal.',

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
  hangmanDescription:
    'Hangman is a classic word-guessing game where you try to reveal a hidden word by guessing one letter at a time. Be careful: every wrong guess brings the hangman closer to completion!',

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
