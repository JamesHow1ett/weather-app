import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import dataFromApi from '../../lib/Api';
import defaultWeatherData from '../../lib/DefaultWeatherData';

//styles
import './TodayWeather.scss';

//initialize defaultWeatherData object
const defaultData = defaultWeatherData();

function TodayWeather (dataApi) {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    dataFromApi(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${'922137'}/`)
      .then(res => setWeatherData(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="today-weather">
      {console.log('hello world')}
      <div className="today-weather__btn-search-group">
        <div className="today-weather__btn-search"><span>Seach for places</span></div>
        <div className="today-weather__btn-location">
          <img src="/static/img/icons/baseline_gps_fixed_white_18dp.png" alt="gps logo"></img>
        </div>
      </div>
      <div className="today-weather__current-weather">
        <div className="today-weather__weather-icon">
          <img src={`/static/img/weather/png/${weatherData['consolidated_weather'] ? weatherData['consolidated_weather'][0]['weather_state_abbr'] : defaultData['consolidated_weather']['weather_state_abbr']}.png`} alt="weather-icon"></img>
        </div>
        <div className="today-weather__weather-detail">
          <div className="today-weather__weather-temp">{Number(weatherData['consolidated_weather'] ? weatherData['consolidated_weather'][0]['the_temp'] : defaultData['consolidated_weather']['the_temp']).toFixed(0)}<span>&#176;С</span></div>
          <div className="today-weather__weather-name">{weatherData['consolidated_weather'] ? weatherData['consolidated_weather'][0]['weather_state_name'] : defaultData['consolidated_weather']['weather_state_name']}</div>
        </div>
        <div className="today-weather__weather-location">
          <div className="today-weather__date-group">
            <div className="today-weather__today">Today</div>
            <div className="today-weather__full-date">{new Date().toLocaleDateString('en-GB', defaultData['dateOptions'])}</div>
          </div>
          <div className="today-weather__city">
            <div className="today-weather__city-icon">
              <img src="/static/img/icons/baseline_place_white_18dp.png" alt="city-icon"></img>
            </div>
            <div className="today-weather__city-name">{weatherData ? weatherData['title'] : defaultData['title']}</div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default TodayWeather

// TodayWeather.propTypes = {
//   dataApi: PropTypes.string.isRequired
// }
