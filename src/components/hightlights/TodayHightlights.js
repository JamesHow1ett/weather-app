import React from 'react';
//import PropTypes from 'prop-types';
import defaultWeatherData from '../../lib/DefaultWeatherData';
import { toKilometrs } from '../../lib/convertr';
//styles
import './TodayHightlights.scss';

//initialize defaultWeatherData object
const defaultData = defaultWeatherData();

function TodayHightlights (props) {
  const data = props.weatherData;

  return (
    <div className="today-hightlights">
      <div className="today-hightlights__header">
      <span>Today's Hightlights for {data ? data['title'] : ''}</span>
      </div>
      <div className="today-hightlights__wrapper">
        <div className="today-hightlights__box">
          <div className="today-hightlights__item">
            <div className="today-hightlights__label">
              <span>Wind status</span>
            </div>
            <div className="today-hightlights__info">
            {!!props.isCelsium ?
              <span>{
                data['consolidated_weather'] ?
                toKilometrs(Number(data['consolidated_weather'][0]['wind_speed'].toFixed(1))) :
                toKilometrs(defaultData['consolidated_weather']['wind_speed'])
              }
                <span className="today-hightlights__info_small">&nbsp;kph</span>
              </span> :
              <span>{
                data['consolidated_weather'] ?
                Number(data['consolidated_weather'][0]['wind_speed'].toFixed(1)) :
                defaultData['consolidated_weather']['wind_speed']
              }
                <span className="today-hightlights__info_small">&nbsp;mph</span>
              </span>
            }
            </div>
            <div className="today-hightlights__wind-direction">
              <div>
                <img
                  src={`/static/img/icons/navigation-white-18dp.svg`}
                  alt="wind_direction_compass"
                  className={`today-hightlights__wind-direction today-hightlights__wind-direction-img_${
                    data['consolidated_weather'] ?
                    data['consolidated_weather'][0]['wind_direction_compass'] :
                    defaultData['consolidated_weather']['wind_direction_compass']
                  }`} />
              </div>
              <span>{
                data['consolidated_weather'] ?
                data['consolidated_weather'][0]['wind_direction_compass'] :
                defaultData['consolidated_weather']['wind_direction_compass']
              }
              </span>
            </div>
          </div>
        </div>
        <div className="today-hightlights__box">
          <div className="today-hightlights__item">
            <div className="today-hightlights__label">
              <span>Humidity</span>
            </div>
            <div className="today-hightlights__info">
              <span>{
                data['consolidated_weather'] ?
                data['consolidated_weather'][0]['humidity'] :
                defaultData['consolidated_weather']['humidity']
              }
              %</span>
            </div>
            <div className="today-hightlights__progress-bar">
              <progress
                className="progress-bar"
                max="100"
                value={
                  data['consolidated_weather'] ?
                  data['consolidated_weather'][0]['humidity'] :
                  defaultData['consolidated_weather']['humidity']
                }
              >
              </progress>
            </div>
          </div>
        </div>
        <div className="today-hightlights__box today-hightlights__box_small">
          <div className="today-hightlights__item">
            <div className="today-hightlights__label">
              <span>Visibility</span>
            </div>
            <div className="today-hightlights__info">
            {!!props.isCelsium ?
              <span>{
                data['consolidated_weather'] ?
                toKilometrs(Number(data['consolidated_weather'][0]['visibility'].toFixed(1))) :
                toKilometrs(defaultData['consolidated_weather']['visibility'])
              }
                <span className="today-hightlights__info_small">&nbsp;km</span>
              </span> :
              <span>{
                data['consolidated_weather'] ?
                Number(data['consolidated_weather'][0]['visibility'].toFixed(1)) :
                defaultData['consolidated_weather']['visibility']
              }
                <span className="today-hightlights__info_small">&nbsp;miles</span>
              </span>
            }
            </div>
          </div>
        </div>
        <div className="today-hightlights__box today-hightlights__box_small">
          <div className="today-hightlights__item">
            <div className="today-hightlights__label">
              <span>Air Pressure</span>
            </div>
            <div className="today-hightlights__info">
              <span>{
                data['consolidated_weather'] ?
                Number(data['consolidated_weather'][0]['air_pressure'].toFixed(0)) :
                defaultData['consolidated_weather']['air_pressure']
              }
                <span className="today-hightlights__info_small">&nbsp;mb</span>
              </span>
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
