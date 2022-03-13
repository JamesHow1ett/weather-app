import { DATE_FORMAT } from './constants';

export const getGeolocation = () => {
  const getCoords = (position) => {
    const longitude = position.coords.longitude || 1;
    const latitude = position.coords.latitude || 1;
    return {
      latitude: Number(latitude).toFixed(3),
      longitude: Number(longitude).toFixed(3),
    };
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoords);
  }
};

/**
 * @param {Date} date
 * @returns {String} formatted date for card title
 */
export const formattedDate = (date) => {
  const today = new Date();
  if (date.getDate() === 0 || date.getDate() > today.getDate()) {
    return 'Tomorrow';
  }

  return new Date(date).toLocaleDateString('en-GB', DATE_FORMAT);
};
