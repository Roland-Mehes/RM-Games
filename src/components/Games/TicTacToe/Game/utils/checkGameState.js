import { winningCombinations } from './winningCombinations';

export const checkGameState = (
  board,
  playerMarker,
  setIsWinner,
  setModal,
  setScoreA,
  setScoreB,
  setTies
) => {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      const winner = board[a];
      setIsWinner(winner);

      if (winner === playerMarker) {
        setScoreA((prev) => prev + 1);
        setModal('win');
      } else {
        setScoreB((prev) => prev + 1);
        setModal('lose');
      }
      return;
    }
  }

  if (board.every((cell) => cell !== null)) {
    setTies((prev) => prev + 1);
    setModal('tie');
  }
};
