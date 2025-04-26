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
      'A "H" és "E" zöld, mert a helyük helyes',
      '"L" és "L" sárga, mert benne van a szóban, de más helyen',
      '"O" szürke, mivel nem szerepel a szóban.',
    ],
    lose: 'WORLD - Ha hibát követünk el, piros hiba animációval értesít minket a játék.',
  },

  // ÚJ descriptionök minden játékhoz
  wordleDescription:
    'A Wordle egy szórakoztató szójáték, amelyben egy 5 betűs szót kell kitalálnod 6 próbálkozásból. Minden tipp után színek jelzik, hogy mennyire vagy közel a helyes megoldáshoz.',

  sudokuDescription:
    'A Sudoku egy klasszikus logikai játék, ahol számokkal kell kitölteni egy 9x9-es rácsot úgy, hogy minden sorban, oszlopban és 3x3-as négyzetben egyaránt minden szám csak egyszer szerepeljen.',

  tictactoeDescription:
    'A Tic Tac Toe egy egyszerű, de addiktív játék, ahol két játékos felváltva jelöli az X vagy O karaktereket egy 3x3-as táblán. A cél három azonos jel egy sorban, oszlopban vagy átlósan.',

  hangmanDescription:
    'A Hangman egy klasszikus szójáték, ahol betűnként próbálod kitalálni az elrejtett szót. Vigyázz: minden rossz tipp közelebb visz a felakasztott ember teljes elkészüléséhez!',

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
  words: wordsList,
  howToPlay: `Találd ki a szót 6 próbálkozásból! Minden próbálkozás egy érvényes 5 betűs szó kell legyen. A csempék színe mutatja, hogy mennyire volt pontos a tipped.`,
  wins: 'Győzelmek',
  losses: 'Vereségek',
};
