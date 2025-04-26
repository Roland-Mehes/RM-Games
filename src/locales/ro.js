import { wordsList } from './roWordsList';

export const webLang = {
  // text for header
  gameButton: 'Jocuri',
  LogoutButton: 'Deconectare',
  records: 'Recorduri',
  signUp: 'Înregistrare',

  // text for the Hero section
  heroTextHeader: 'Joacă jocurile tale logice preferate!',
  heroTextParagraph:
    'Descoperă Wordle și alte jocuri logice distractive. Provocări zilnice și puzzle-uri captivante te așteaptă!',

  // text for the Game section
  gameSectionHeader: 'Jocuri de Top',
  playBtn: 'Joacă acum!',

  //text for benefits
  benefitsHeader: 'De ce merită să joci?',
  benefitsContent: [
    'Dezvoltă gândirea logică',
    'Provocări în fiecare zi',
    'Excelent pentru distracție și exerciții pentru creier',
  ],

  // text for login and register
  loginHeader: 'Autentificare',
  rememberMe: 'Ține-mă minte',
  login: 'Autentificare',
  forgetPassword: 'Ai uitat parola?',
  dontHaveAccount: 'Nu ai cont? Creează unul ',
  hereLink: 'aici.',
  loginErrorMSG: 'Email sau parolă incorectă',

  signUpHeader: 'Înregistrare',
  signUpButton: 'Înregistrare',
  alreadySignedUp: 'Ai deja cont? Autentifică-te ',

  //Record Page
  recordHeader: 'Statistici',
  recordSelect: 'Selectează Jocul',

  // text for Wordle Game
  wordleGuessTheWord: 'Ghiceste cuvântul',
  wordleWordIsNotInDatabase:
    'Acest cuvânt nu este în lista noastră de cuvinte.',
  wordleGameOver: 'Joc terminat. Cuvântul corect era: ',

  wordleRules: {
    title: '🪓 Ghid Wordle',
    description:
      'Scopul jocului Wordle este să ghicești cuvântul de 5 litere în 6 încercări. După fiecare încercare, vei primi următoarele feedback-uri:',
    rules: [
      'HELLO - Primele patru caractere corespund cuvântului',
      '"H" și "E" sunt verzi pentru că sunt pe poziția corectă',
      '"L" și "L" sunt galbene deoarece sunt în cuvânt dar pe altă poziție',
      '"O" este gri, pentru că nu se află în cuvânt.',
    ],
    lose: 'WORLD - Dacă greșim, jocul ne arată o animație de eroare roșie.',
  },

  // Descriptions for each game
  wordleDescription:
    'Wordle este un joc distractiv de cuvinte în care trebuie să ghicești un cuvânt de 5 litere în maximum 6 încercări. Fiecare încercare îți va indica cât de aproape ești de soluția corectă.',

  sudokuDescription:
    'Sudoku este un joc clasic de logică în care trebuie să completezi o grilă 9x9 astfel încât fiecare rând, coloană și pătrat 3x3 să conțină toate cifrele de la 1 la 9 o singură dată.',

  tictactoeDescription:
    'Tic Tac Toe este un joc simplu și captivant pentru doi jucători, unde scopul este să aliniază trei simboluri identice (X sau O) pe o linie, coloană sau diagonală.',

  hangmanDescription:
    'Spânzurătoarea este un joc clasic de cuvinte în care trebuie să ghicești cuvântul ascuns, literă cu literă. Atenție: fiecare greșeală construiește mai mult figura spânzuratului!',

  // text for Hangman Modal
  hangmanGuessTheWord: 'Ghiceste cuvântul',
  hangmanWin: 'Felicitări 🏆',

  hangmanRules: {
    title: '🪓 Regulile Spânzurătorii',
    description:
      'Scopul jocului Spânzurătoarea este să ghicești cuvântul secret literă cu literă.',
    rules: [
      'La fiecare literă greșită, se adaugă o parte la figură: 😶 cap, 🥼 corp, ✋ brațe și 🦵 picioare.',
      '💀 Dacă figura este completă, ai pierdut.',
      '🏆 Dacă ghicești cuvântul înainte ca figura să fie completă, ai câștigat!',
    ],
  },

  //Common game Text
  gameOverText: 'Încearcă din nou 😢',
  scoreMsgWin: 'Victorii',
  scoreMsgLose: 'Înfrângeri',
};

export const roKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'ă', 'î', 'â'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ș', 'ț'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ['enter', 'backspace'],
];

export const wordleLang = {
  words: wordsList,
  howToPlay: `Ghiceste cuvântul în 6 încercări. Fiecare încercare trebuie să fie un cuvânt valid de 5 litere. Culorile îți vor arăta cât de aproape ești de cuvântul corect.`,
  wins: 'Victorii',
  losses: 'Înfrângeri',
};
