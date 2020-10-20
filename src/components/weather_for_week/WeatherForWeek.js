import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dataFromApi from '../../lib/Api';

//styles
import './WeatherForWeek.scss';

function WeatherForWeek (dataApi) {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    dataFromApi('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/922137/')
      .then(res => setWeatherData(res))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="week-weather">
      <div className="convert-tempreture-btn-group">
        <div className="convert-tempreture-btn-group__btn convert-tempreture-btn-group__btn active">
          <span>&#176;С</span>
        </div>
        <div className="convert-tempreture-btn-group__btn">
          <span>&#176;F</span>
        </div>
      </div>
      <div className="weather-next-day">
        {weatherData['consolidated_weather'] ? weatherData['consolidated_weather'].map((item, index) => (
          index > 0 ? (
            <div className="weather-next-day__item" key={index}>
              <div className="weather-next-day__day-name">
                <span>{item['applicable_date']}</span>
              </div>
              <div className="weather-next-day__weather-icon">
                <img src={`/static/img/weather/png/${item['weather_state_abbr']}.png`} alt="weather icon"></img>
              </div>
              <div className="weather-next-day__temp">
                <span className="weather-next-day__temp_max">{Number(item['max_temp']).toFixed()}&#176;С</span>
                <span className="weather-next-day__temp_min">{Number(item['min_temp']).toFixed()}&#176;С</span>
              </div>
            </div>
          ) : ''
        )) :
            <div className="weather-next-day__item">
              <div className="weather-next-day__day-name">
                <span>{new Date().toLocaleDateString('en-GB', dataApi.dateOptions)}</span>
              </div>
              <div className="weather-next-day__weather-icon">
                <img src={`/static/img/weather/png/t.png`} alt="weather icon"></img>
              </div>
              <div className="weather-next-day__temp">
                <span className="weather-next-day__temp_max">0&#176;С</span>
                <span className="weather-next-day__temp_min">0&#176;С</span>
              </div>
            </div>}
        {/* {dataApi.data.map((item, index) => (
        <div className="weather-next-day__item" key={index}>
          <div className="weather-next-day__day-name">
            <span>{new Date().toLocaleDateString('en-GB', dataApi.dateOptions)}</span>
          </div>
          <div className="weather-next-day__weather-icon">
            <img src={`/static/img/weather/png/${item['weather_state_abbr']}.png`} alt="weather icon"></img>
          </div>
          <div className="weather-next-day__temp">
            <span className="weather-next-day__temp_max">{Number(item['max_temp']).toFixed()}&#176;С</span>
            <span className="weather-next-day__temp_min">{Number(item['min_temp']).toFixed()}&#176;С</span>
          </div>
        </div>
        ))} */}
      </div>
    </div>
  )
}

export default WeatherForWeek

WeatherForWeek.propTypes = {
  dataApi: PropTypes.object.isRequired
}
