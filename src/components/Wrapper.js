import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import dataFromApi from '../lib/Api';

//components
import SearchBar from './search_bar/SearchBar';
import TodayHightlights from './hightlights/TodayHightlights';
import TodayWeather from './today_weather/TodayWeather';
import WeatherForWeek from './weather_for_week/WeatherForWeek';

//styles
import './Wrapper.scss';


export default function Wrapper () {
  const [weatherData, setWeatherData] = useState({});
  const [locationResults, setLocationResults] = useState([]);
  const [locationNum, setLocationNum] = useState(922137);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [isCelsium, setIsCelsium] = useState(true);

  useEffect(() => {
    dataFromApi(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${locationNum}/`)
      .then(res => setWeatherData(res))
      .catch(err => console.log(err))
  }, [locationNum])

  async function getSearchResults (inputValue) {
    return dataFromApi(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${inputValue}`)
            .then(res => setLocationResults(res))
            .catch(err => console.log(err));
  }

  function handleSearchBar (inputValue = 'lozova') {
    let trimStr = inputValue.replace(/"|'/, '').toLowerCase();
    return getSearchResults(trimStr);
  }

  function handleLocationId (locationId = '01') {
    let convertToNum = +locationId;
    return setLocationNum(convertToNum);
  }

  function handleIsSearchBar () {
    return setIsSearchBar(!isSearchBar);
  }

  function handleIsCelsium () {
    return setIsCelsium(!isCelsium);
  }
  

  return (
    <div className="wrapper">
      {console.log(locationResults)}
      <div className="component component-today-weather">
        {isSearchBar && <SearchBar
                          locationResults={locationResults}
                          handleSearchBar={handleSearchBar}
                          handleLocationId={handleLocationId}
                          handleIsSearchBar={handleIsSearchBar}
                        />}
        {!isSearchBar && <TodayWeather
                            weatherData={weatherData}
                            handleSearchBar={handleSearchBar}
                            handleIsSearchBar={handleIsSearchBar}
                            isCelsium={isCelsium}
                          />}
      </div>
      <div className="component-wrapper">
        <div className="component component-weather-for-week">
          <WeatherForWeek
            weatherData={weatherData}
            handleIsCelsium={handleIsCelsium}
            isCelsium={isCelsium}
          />
        </div>
        <div className="component component-today-hightlights">
          <TodayHightlights weatherData={weatherData} />
        </div>
      </div>
    </div>
  )
}
