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

  wordleRules: {
    title: '🪓 Ghidul Jocului Wordle',
    description:
      'Scopul jocului Wordle este să ghicim cuvântul de 5 litere în 6 încercări. După fiecare încercare, primim următorul feedback:',
    rules: [
      'HELLO - Primele patru caractere se potrivesc cu cuvântul',
      '"H" și "E" sunt verzi, deoarece sunt în poziția corectă',
      '"L" și "L" sunt galbene, deoarece sunt în cuvânt, dar în altă poziție',
      '"O" este gri, deoarece nu face parte din cuvânt.',
    ],
    lose: 'WORLD - Dacă greșim, jocul ne notifică cu o animație roșie de eroare.',
  },

  //Common game Text
  gameOverText: 'Încearcă din nou',

  // text for Hangman Modal
  hangmanRules: {
    title: '🪓 Regulile Spânzuratului',
    description:
      'Scopul jocului Spânzurătoarea este să ghicești cuvântul secret literă cu literă.',
    rules: [
      'Pentru fiecare literă greșită, o parte a figurii este desenată:😶 capul,🥼 corpul, ✋ brațele și 🦵 picioarele.',
      '💀 Dacă figura este complet desenată, ai pierdut.',
      '🏆 Dacă ghicești cuvântul înainte ca figura să fie completă, ai câștigat!',
    ],
  },
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
