import { useState } from 'react';
import apiService from '../../lib/api';
import { getGeolocation } from '../../lib/utils/utils';

const useGeolocationData = () => {
  const [woeid, setWoeid] = useState(44418);

  const fetchWoeid = async () => {
    const {
      latitude,
      longitude,
    } = getGeolocation();

    const { data } = await apiService.get(`/api/location/search/?lattlong=${latitude},${longitude}`);

    setWoeid(data[0].woeid);
  };

  return {
    woeid,
    setWoeid,
    fetchWoeid,
  };
};

export default useGeolocationData;
