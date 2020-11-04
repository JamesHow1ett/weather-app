import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import dataFromApi from '../../lib/Api';
import defaultWeatherData from '../../lib/DefaultWeatherData';

//styles
import './TodayHightlights.scss';

//initialize defaultWeatherData object
const defaultData = defaultWeatherData();

function TodayHightlights (props) {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    dataFromApi('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/922137/')
      .then(res => setWeatherData(res))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="today-hightlights">
      <div className="today-hightlights__header">
        <span>Today's Hightlights</span>
      </div>
      <div className="today-hightlights__wrapper">
        <div className="today-hightlights__box">
          <div className="today-hightlights__item">
            <div className="today-hightlights__label">
              <span>Wind status</span>
            </div>
            <div className="today-hightlights__info">
              <span>{props.weatherData['consolidated_weather'] ? Number(props.weatherData['consolidated_weather'][0]['wind_speed']).toFixed(1) : defaultData['consolidated_weather']['wind_speed']}<span className="today-hightlights__info_small">&nbsp;mph</span></span>
            </div>
            <div className="today-hightlights__wind-direction">
              <div>
                <img
                  src={`/static/img/icons/navigation-white-18dp.svg`}
                  alt="wind_direction_compass"
                  className={`today-hightlights__wind-direction today-hightlights__wind-direction-img_${
                    props.weatherData['consolidated_weather'] ? props.weatherData['consolidated_weather'][0]['wind_direction_compass'] : defaultData['consolidated_weather']['wind_direction_compass']
                  }`} />
              </div>
              <span>{props.weatherData['consolidated_weather'] ? props.weatherData['consolidated_weather'][0]['wind_direction_compass'] : defaultData['consolidated_weather']['wind_direction_compass']}</span>
            </div>
          </div>
        </div>
        <div className="today-hightlights__box">
          <div className="today-hightlights__item">
            <div className="today-hightlights__label">
              <span>Humidity</span>
            </div>
            <div className="today-hightlights__info">
              <span>{props.weatherData['consolidated_weather'] ? props.weatherData['consolidated_weather'][0]['humidity'] : defaultData['consolidated_weather']['humidity']}%</span>
            </div>
            <div className="today-hightlights__progress-bar">
              <progress className="progress-bar" max="100" value={props.weatherData['consolidated_weather'] ? props.weatherData['consolidated_weather'][0]['humidity'] : defaultData['consolidated_weather']['humidity']}></progress>
            </div>
          </div>
        </div>
        <div className="today-hightlights__box today-hightlights__box_small">
          <div className="today-hightlights__item">
            <div className="today-hightlights__label">
              <span>Visibility</span>
            </div>
            <div className="today-hightlights__info">
              <span>{props.weatherData['consolidated_weather'] ? Number(props.weatherData['consolidated_weather'][0]['visibility']).toFixed(1) : defaultData['consolidated_weather']['visibility']}<span className="today-hightlights__info_small">&nbsp;miles</span></span>
            </div>
          </div>
        </div>
        <div className="today-hightlights__box today-hightlights__box_small">
          <div className="today-hightlights__item">
            <div className="today-hightlights__label">
              <span>Air Pressure</span>
            </div>
            <div className="today-hightlights__info">
              <span>{props.weatherData['consolidated_weather'] ? Number(props.weatherData['consolidated_weather'][0]['air_pressure']).toFixed(0) : defaultData['consolidated_weather']['air_pressure']}<span className="today-hightlights__info_small">&nbsp;mb</span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="today-hightlights__dev-sign"></div>
    </div>
  )

}

export default TodayHightlights

// TodayHightlights.propTypes = {
//   dataApi: PropTypes.object
// }
