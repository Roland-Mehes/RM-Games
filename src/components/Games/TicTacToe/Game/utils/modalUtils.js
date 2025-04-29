import X from '../../assets/X';
import O from '../../assets/O';
import { Ctx } from '../../../../../context/LanguageContext';

export const GetModalContent = (modalType) => {
  const { TicTacToe } = Ctx();
  const { player1Marker } = TicTacToe;

  switch (modalType) {
    case 'win':
      return {
        title: player1Marker === 'X' ? 'YOU WON!' : 'YOU WON!',
        subtitle: 'TAKES THE ROUND',
        SvgComponent: player1Marker === 'X' ? X : O,
        svgColor: player1Marker === 'X' ? '#008AFF' : '#FFAA00',
        confirmText: 'NEXT ROUND',
        cancelText: 'QUIT',
      };

    case 'lose':
      return {
        title: player1Marker === 'X' ? 'YOU LOST!' : 'YOU LOST!',
        subtitle: 'TAKES THE ROUND',
        SvgComponent: player1Marker === 'X' ? O : X,
        svgColor: player1Marker === 'X' ? '#FFAA00' : '#008AFF',
        confirmText: 'NEXT ROUND',
        cancelText: 'QUIT',
      };

    case 'tie':
      return {
        title: 'NOBODY WON!',
        subtitle: 'ROUND TIED',
        SvgComponent: null,
        confirmText: 'NEXT ROUND',
        cancelText: 'QUIT',
      };

    case 'restart':
      return {
        title: 'ARE YOU SURE?',
        subtitle: 'RESTART GAME',
        SvgComponent: null,
        confirmText: 'YES, RESTART',
        cancelText: 'NO, CANCEL',
      };

    default:
      return {
        title: 'ERROR',
        subtitle: 'Invalid modal type.',
        SvgComponent: null,
        confirmText: '',
        cancelText: '',
      };
  }
};
