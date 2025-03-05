import { wordsList } from './huWordsList';

export const webLang = {
  // text for header
  gameButton: 'Játékok',
  LogoutButton: 'Kijelentkezés',
  records: 'Rekordok',
  signUp: 'Regisztrálás',

  // text for the Hero section
  heroTextHeader: 'Játssz a kedvenc logikai játékaiddal!',
  heroTextParagraph:
    'Fedezd fel a Wordle-t és más szórakoztató logikai játékokat. Napi kihívások és szórakoztató rejtvények várnak rád!',

  // text for the Game section
  gameSectionHeader: 'Top Játékok',
  playBtn: 'Játsz most!',

  //text for benefits
  benefitsHeader: 'Miért érdemes játszani?',
  benefitsContent: [
    'Fejleszti a logikai gondolkodást',
    'Kihívások minden nap',
    'Kiváló a szórakozásra és az agytornáztatásra',
  ],

  // text for login and register
  loginHeader: 'Bejelentkezés',
  rememberMe: 'Emlékezz rám',
  login: 'Bejelentkezés',
  forgetPassword: 'Elfelejtetted a jelszót?',
  dontHaveAccount: 'Nincs fiókod? Készítsünk egyet ',
  hereLink: 'itt.',
  loginErrorMSG: 'Helytelen email vagy jelszó',

  // text for sign Up / Register

  signUpHeader: 'Regisztráció',
  signUpButton: 'Regisztráció',
  alreadySignedUp: 'Már van fiókod? Jelentkezz be ',

  //Record Page

  recordHeader: 'Statisztikák',
  recordSelect: 'Játék kiválasztása',

  // text for Wordle Game
  wordleGuessTheWord: 'Találd ki a szót',
  wordleWordIsNotInDatabase: 'Ez a szó nincs a szavaink listájában.',
  wordleGameOver: 'Játék vége. A helyes szó: ',

  wordleRules: {
    title: '🪓 Wordle Játék Útmutató',
    description:
      'A Wordle játék célja, hogy kitaláljuk az 5 betűs szót 6 próbálkozásból. Minden egyes próbálkozás után a következő visszajelzéseket kapjuk:',
    rules: [
      'HELLO - Az első négy karakter megfelel a szónak',
      'a "H" és "E" zöld, mert a helyük helyes',
      'L" és "L" sárga, mert benne van a szóban, de más helyen',
      'O" szürke, mivel nem szerepel a szóban.',
    ],
    lose: 'WORLD - Ha hibát követünk el, piros hiba animációval értesít minket a játék.',
  },

  // text for Hangman Modal
  hangmanGuessTheWord: 'Találd ki a szót',
  hangmanWin: 'Gratulálok 🏆',

  hangmanRules: {
    title: '🪓 Hangman szabályai',
    description:
      'A Hangman játék célja, hogy kitaláld a titkos szót betűnként.',
    rules: [
      'Minden rossz tipp után egy részlet rajzolódik ki: 😶 fej, 🥼 test, ✋ karok és 🦵 lábak.',
      '💀 Ha a figura teljesen elkészül, vesztettél.',
      '🏆 Ha kitalálod a szót, mielőtt a figura elkészül, nyertél!',
    ],
  },

  //Common game Text
  gameOverText: 'Próbáld újra 😢',
  scoreMsgWin: 'Győzelmek',
  scoreMsgLose: 'Vereségek',
};

export const huKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ö', 'ü', 'ó'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'é', 'á', 'ű'],
  ['í', 'y', 'x', 'c', 'v', 'b', 'n', 'm', 'ő', 'ú'],
  ['enter', 'backspace'],
];

export const wordleLang = {
  //text and words only for wordle game
  words: wordsList,
  howToPlay: `Guess the word in 6 tries. Each guess must be a valid 5-letter word. The color of the tiles will change to show how close your guess was to the word.`,
  wins: 'Győzelmek',
  losses: 'Vereségek',
};
