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
};

export const wordleLang = {
  words: wordsList
    .trim()
    .split('\n')
    .filter((word) => word.length === 5),
  howToPlay: `Guess the word in 6 tries. Each guess must be a valid 5-letter word. The color of the tiles will change to show how close your guess was to the word.`,

  wins: 'Wins',
  losses: 'Losses',
};
