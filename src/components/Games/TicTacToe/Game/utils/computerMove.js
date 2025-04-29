export const computerMove = (
  board,
  computerMarker,
  setBoardCells
  // setCurrentPlayer
) => {
  // Looking up for empty fields
  const availableMoves = board
    .map((cell, idx) => (cell === null ? idx : null))
    .filter((val) => val !== null);

  if (availableMoves.length === 0) return;

  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  const chosenMove = availableMoves[randomIndex];

  const newBoard = [...board];
  newBoard[chosenMove] = computerMarker;

  // Move
  setBoardCells(newBoard);
  // setCurrentPlayer(computerMarker === 'X' ? 'O' : 'X');
};
