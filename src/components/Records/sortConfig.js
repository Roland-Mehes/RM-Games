import { FaSortUp, FaSortDown, FaSort } from 'react-icons/fa';

const SortIcon = ({ columnKey, sortConfig }) => {
  const isActive = sortConfig.key === columnKey;
  const direction = sortConfig.direction;

  const iconStyle = {
    marginLeft: '5px',
    color: isActive ? (direction === 'dec' ? '#50fa7b' : '#ff79c6') : 'gray',
    fontSize: isActive ? '1em' : '0.8em', // Activ bigger, inakciv smaller
  };

  return isActive ? (
    direction === 'dec' ? (
      <FaSortDown style={iconStyle} />
    ) : (
      <FaSortUp style={iconStyle} />
    )
  ) : (
    <FaSort style={iconStyle} /> // inactive column has a gray arrow
  );
};

export default SortIcon;
