export default (deg = 0) => {
  let windDirection = '';
  switch (true) {
    case deg >= 331.875 && deg < 16.875:
      windDirection = 'N';
      break;
    case deg >= 16.875 && deg < 61.875:
      windDirection = 'NE';
      break;
    case deg >= 61.875 && deg < 106.875:
      windDirection = 'E';
      break;
    case deg >= 106.875 && deg < 151.875:
      windDirection = 'SE';
      break;
    case deg >= 151.875 && deg < 196.875:
      windDirection = 'S';
      break;
    case deg >= 196.875 && deg < 241.875:
      windDirection = 'SW';
      break;
    case deg >= 241.875 && deg < 286.875:
      windDirection = 'W';
      break;
    case deg >= 286.875 && deg < 331.875:
      windDirection = 'NW';
      break;
    default:
      windDirection = 'N';
      break;
  }
  return windDirection;
};
