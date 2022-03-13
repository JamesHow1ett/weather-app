import React from 'react';
import PropTypes from 'prop-types';
import Converter from '../../lib/utils/Converter';
import createDefaultData from '../../lib/utils/defaultWeatherData';
import { formattedDate } from '../../lib/utils/utils';

// styles
import './WeatherForWeek.scss';

const defaultData = createDefaultData();

function WeatherForWeek(props) {
  const {
    isCelsium,
    weatherData,
    toggleCelsium,
  } = props;

  const hasWeatherData = weatherData.consolidated_weather
    && Boolean(weatherData.consolidated_weather.length);
  const [defaultWeatherData] = defaultData.consolidated_weather;

  const renderCardTempreture = (item, isMetrical) => {
    if (isMetrical) {
      return (
        <>
          <span className="weather-next-day__temp_max">
            { Number(item.max_temp).toFixed(0) }
            &#176;С
          </span>
          <span className="weather-next-day__temp_min">
            { Number(item.min_temp).toFixed(0) }
            &#176;С
          </span>
        </>
      );
    }

    return (
      <>
        <span className="weather-next-day__temp_max">
          { new Converter(item.max_temp).toFahrenheitFromCelsius() }
          &#176;F
        </span>
        <span className="weather-next-day__temp_min">
          { new Converter(item.min_temp).toFahrenheitFromCelsius() }
          &#176;F
        </span>
      </>
    );
  };
  const renderDayCard = (item, index = 0) => {
    const key = `weather-next-day__item-${index}`;

    return (
      <div className="weather-next-day__item" key={key}>
        <div className="weather-next-day__day-name">
          <span>
            { formattedDate(item.applicable_date) }
          </span>
        </div>
        <div className="weather-next-day__weather-icon">
          <img src={`/static/img/weather/png/${item.weather_state_abbr}.png`} alt="weather icon" />
        </div>
        <div className="weather-next-day__temp">
          { renderCardTempreture(item, isCelsium) }
        </div>
      </div>
    );
  };

  return (
    <div className="week-weather">
      <div className="convert-tempreture-btn-group">
        <button
          type="button"
          className={`convert-tempreture-btn-group__btn ${isCelsium ? 'active' : ''}`}
          onClick={() => toggleCelsium()}
        >
          <span>&#176;С</span>
        </button>
        <button
          type="button"
          className={`convert-tempreture-btn-group__btn ${isCelsium ? '' : 'active'}`}
          onClick={() => toggleCelsium()}
        >
          <span>&#176;F</span>
        </button>
      </div>
      <div className="weather-next-day">
        {
          hasWeatherData
            ? weatherData.consolidated_weather.map((item, index) => (renderDayCard(item, index)))
            : renderDayCard(defaultWeatherData)
        }
      </div>
    </div>
  );
}

export default WeatherForWeek;

WeatherForWeek.propTypes = {
  isCelsium: PropTypes.bool,
  weatherData: PropTypes.shape(defaultData),
  toggleCelsium: PropTypes.func.isRequired,
};

WeatherForWeek.defaultProps = {
  isCelsium: false,
  weatherData: defaultData,
};
