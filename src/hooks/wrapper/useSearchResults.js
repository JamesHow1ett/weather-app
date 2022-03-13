import { useState } from 'react';
import apiService from '../../lib/api';

const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async (search) => {
    const { data } = await apiService.get(`/api/location/search/?query=${search}`);
    setSearchResults(data);
  };

  return {
    searchResults,
    fetchSearchResults,
  };
};

export default useSearchResults;
