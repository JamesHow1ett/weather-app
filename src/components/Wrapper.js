import React, { useState, useEffect } from 'react';
import {
  useWeatherData,
  useGeolocationData,
  useSearchResults,
} from '../hooks';

// components
import SearchBar from './search_bar/SearchBar';
import TodayHightlights from './hightlights/TodayHightlights';
import TodayWeather from './today_weather/TodayWeather';
import WeatherForWeek from './weather_for_week/WeatherForWeek';
import LoadingComponent from './LoadingComponent';

// styles
import './Wrapper.scss';

function Wrapper() {
  const { weatherData, fetchWeatherData } = useWeatherData();
  const {
    woeid,
    setWoeid,
    fetchWoeid,
  } = useGeolocationData();
  const { searchResults, fetchSearchResults } = useSearchResults([]);
  const [isSearchBar, setSearchBar] = useState(false);
  const [isCelsium, setCelsium] = useState(true);

  useEffect(() => {
    fetchWeatherData(woeid);
  }, [woeid]);

  const handleSearchBar = (searchQuery) => {
    const trimStr = searchQuery.replace(/"|'/, '').toLowerCase();
    fetchSearchResults(trimStr);
  };

  const handleWoeid = (selectedWoeid) => {
    setWoeid(Number(selectedWoeid));
  };

  const toggleSearchBar = () => {
    setSearchBar(!isSearchBar);
  };

  const toggleCelsium = () => {
    setCelsium(!isCelsium);
  };

  return (
    <div className="wrapper">
      <div className="component component-today-weather">
        {
          isSearchBar
          && (
          <SearchBar
            locationResults={searchResults}
            handleSearchBar={handleSearchBar}
            handleLocationId={handleWoeid}
            toggleSearchBar={toggleSearchBar}
          />
          )
        }
        {
          !isSearchBar
          && (
          <TodayWeather
            weatherData={weatherData}
            handleSearchBar={handleSearchBar}
            toggleSearchBar={toggleSearchBar}
            handleGetLocation={() => fetchWoeid}
            isCelsium={isCelsium}
          />
          )
        }
      </div>
      <div className="component-wrapper">
        <LoadingComponent />
        <div className="component component-weather-for-week">
          <WeatherForWeek
            weatherData={weatherData}
            toggleCelsium={toggleCelsium}
            isCelsium={isCelsium}
          />
        </div>
        <div className="component component-today-hightlights">
          <TodayHightlights
            weatherData={weatherData}
            isCelsium={isCelsium}
          />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
