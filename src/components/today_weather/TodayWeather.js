import React from 'react';
import PropTypes from 'prop-types';
import Converter from '../../lib/utils/Converter';
import createDefaultData from '../../lib/utils/defaultWeatherData';
import { DATE_FORMAT } from '../../lib/utils/constants';

// styles
import './TodayWeather.scss';

function TodayWeather(props) {
  const defaultData = createDefaultData();
  const {
    weatherData,
    isCelsium,
    toggleSearchBar,
    handleGetLocation,
  } = props;
  const [weather] = weatherData.consolidated_weather
    || defaultData.consolidated_weather;

  const renderWeatherDetails = (tempreture, isMetrical) => {
    if (isMetrical) {
      return (
        <div
          className="today-weather__weather-temp"
        >
          { Number(tempreture).toFixed(0) }
          <span>&#176;С</span>
        </div>
      );
    }

    return (
      <div
        className="today-weather__weather-temp"
      >
        { new Converter(weather.the_temp).toFahrenheitFromCelsius() }
        <span>&#176;F</span>
      </div>
    );
  };

  return (
    <div className="today-weather">
      <div className="today-weather__btn-search-group">
        <div
          className="today-weather__btn-search"
          role="button"
          tabIndex={-1}
          onClick={() => toggleSearchBar()}
          onKeyDown={() => {}}
        >
          <span>Seach for places</span>
        </div>
        <div
          className="today-weather__btn-location"
          role="button"
          tabIndex={0}
          onClick={() => handleGetLocation()}
          onKeyDown={() => {}}
        >
          <img src="/static/img/icons/baseline_gps_fixed_white_18dp.png" alt="gps logo" />
        </div>
      </div>
      <div className="today-weather__current-weather">
        <div className="today-weather__weather-icon">
          <img
            src={`/static/img/weather/png/${weather.weather_state_abbr}.png`}
            alt="weather-icon"
          />
        </div>
        <div className="today-weather__weather-detail">
          { renderWeatherDetails(weather.the_temp, isCelsium) }
          <div className="today-weather__weather-name">
            { weather.weather_state_name }
          </div>
        </div>
        <div className="today-weather__weather-location">
          <div className="today-weather__date-group">
            <div className="today-weather__today">Today</div>
            <div className="today-weather__full-date">
              { new Date().toLocaleDateString('en-GB', DATE_FORMAT) }
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
  weatherData: PropTypes.shape(createDefaultData()),
  isCelsium: PropTypes.bool,
  toggleSearchBar: PropTypes.func.isRequired,
  handleGetLocation: PropTypes.func.isRequired,
};

TodayWeather.defaultProps = {
  weatherData: createDefaultData(),
  isCelsium: false,
};
