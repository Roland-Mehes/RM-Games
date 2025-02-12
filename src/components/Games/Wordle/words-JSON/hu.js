import { wordsList } from './huWordsList';

export const webLang = {
  // text for header
  gameButton: 'Játékok',
  LogoutButton: 'Kijelentkezés',
  records: 'Rekordok',

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

  // text for Wordle Game
  wordleGuessTheWord: 'Találd ki a szót',
  wordleWordIsNotInDatabase: 'Ez a szó nincs a szavaink listájában.',
  wordleGameOver: 'Játék vége. A helyes szó: ',

  //Common game Text
  gameOverText: 'Próbáld újra',
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
