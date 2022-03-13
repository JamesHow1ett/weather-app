import { useState } from 'react';
import apiService from '../../lib/api';

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = async (location) => {
    const { data } = await apiService.get(`_${location}`);

    setWeatherData(data);
  };

  return {
    weatherData,
    fetchWeatherData,
  };
};

export default useWeatherData;
