import { wordsList } from './roWordsList';

export const webLang = {
  // text for header
  gameButton: 'Jocuri',
  LogoutButton: 'Deconectare',
  records: 'Recorduri',

  // text for the Hero section
  heroTextHeader: 'Joacă-te cu jocurile tale logice preferate!',
  heroTextParagraph:
    'Descoperă Wordle și alte jocuri logice distractive. Provocări zilnice și puzzle-uri amuzante te așteaptă!',

  // text for the Game section
  gameSectionHeader: 'Top Jocuri',
  playBtn: 'Joacă acum!',

  //text for benefits
  benefitsHeader: 'De ce merită să te joci?',
  benefitsContent: [
    'Dezvoltă gândirea logică',
    'Provocări în fiecare zi',
    'Excelent pentru distracție și exerciții pentru minte',
  ],

  // text for Wordle Game
  wordleGuessTheWord: 'Găsește cuvântul!',
  wordleWordIsNotInDatabase:
    'Acest cuvânt nu este în lista noastră de cuvinte.',
  wordleGameOver: 'Joc terminat. Cuvântul a fost: ',

  //Common game Text
  gameOverText: 'Încearcă din nou',
};

export const roKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'ă', 'â'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ș', 'ț'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'î'],
  ['enter', 'backspace'],
];

export const wordleLang = {
  words: wordsList,
  howToPlay: `Găsește cuvântul în 6 încercări. Fiecare încercare trebuie să fie un cuvânt valid de 5 litere. Culoarea celulelor se va schimba pentru a arăta cât de aproape a fost ghicirea ta de cuvânt.`,
  wins: 'Victori',
  losses: 'Pierderi',
};
