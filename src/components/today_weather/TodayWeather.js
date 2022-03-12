import React from 'react';
import PropTypes from 'prop-types';
import Converter from '../../lib/utils/Converter';

// styles
import './TodayWeather.scss';

function TodayWeather(props) {
  const {
    defaultData,
    weatherData,
    isCelsium,
    handleIsSearchBar,
    handleGetLocation,
  } = props;
  const consolidatedWeather = weatherData.consolidated_weather || defaultData.consolidated_weather;

  return (
    <div className="today-weather">
      <div className="today-weather__btn-search-group">
        <div className="today-weather__btn-search" onClick={(() => handleIsSearchBar())}>
          <span>Seach for places</span>
        </div>
        <div className="today-weather__btn-location" onClick={(() => handleGetLocation())}>
          <img src="/static/img/icons/baseline_gps_fixed_white_18dp.png" alt="gps logo" />
        </div>
      </div>
      <div className="today-weather__current-weather">
        <div className="today-weather__weather-icon">
          <img
            src={`/static/img/weather/png/${consolidatedWeather[0].weather_state_abbr}.png`}
            alt="weather-icon"
          />
        </div>
        <div className="today-weather__weather-detail">
          {isCelsium
            ? (
              <div
                className="today-weather__weather-temp"
              >
                {
                Number(consolidatedWeather[0].the_temp).toFixed(0)
              }
                <span>&#176;С</span>
              </div>
            )
            : (
              <div
                className="today-weather__weather-temp"
              >
                {
              Converter(consolidatedWeather[0].the_temp).toFahrenheitFromCelsius()
            }
                <span>&#176;F</span>
              </div>
            )}
          <div className="today-weather__weather-name">
            {
              consolidatedWeather[0].weather_state_name
            }
          </div>
        </div>
        <div className="today-weather__weather-location">
          <div className="today-weather__date-group">
            <div className="today-weather__today">Today</div>
            <div className="today-weather__full-date">
              { new Date().toLocaleDateString('en-GB', defaultData.dateOptions) }
            </div>
          </div>
          <div className="today-weather__city">
            <div className="today-weather__city-icon">
              <img src="/static/img/icons/baseline_place_white_18dp.png" alt="city-icon" />
            </div>
            <div className="today-weather__city-name">
              { weatherData ? weatherData.title : defaultData.title }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;

TodayWeather.propTypes = {
  weatherData: PropTypes.object,
  defaultData: PropTypes.object.isRequired,
};
