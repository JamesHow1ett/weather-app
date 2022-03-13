import React from 'react';
import PropTypes from 'prop-types';

import createDefaultData from '../../lib/utils/defaultWeatherData';

// components
import WindStatus from './WindStatus';
import Humidity from './Humidity';
import Visibility from './Visibility';
import AirPressure from './AirPressure';

// styles
import './TodayHightlights.scss';

function TodayHightlights(props) {
  const defaultData = createDefaultData();

  const { isCelsium, weatherData } = props;
  const [weather] = weatherData.consolidated_weather || defaultData.consolidated_weather;

  return (
    <div className="today-hightlights">
      <div className="today-hightlights__header">
        <span>
          Today&rsquo;s Hightlights for
          {' '}
          { weatherData.title ?? defaultData.title }
        </span>
      </div>
      <div className="today-hightlights__wrapper">
        <div className="today-hightlights__box">
          <WindStatus
            isCelsium={isCelsium}
            windSpeed={Number(weather.wind_speed)}
            windDirectionCompass={weather.wind_direction_compass}
          />
        </div>
        <div className="today-hightlights__box">
          <Humidity
            humidity={weather.humidity}
          />
        </div>
        <div className="today-hightlights__box today-hightlights__box_small">
          <Visibility
            visibility={Number(weather.visibility)}
            isCelsium={isCelsium}
          />
        </div>
        <div className="today-hightlights__box today-hightlights__box_small">
          <AirPressure
            airPressure={weather.air_pressure}
          />
        </div>
      </div>
      <div className="today-hightlights__dev-sign">
        <span>
          Oleksandr Skorokhod @&nbsp;
          <a
            href="https://devchallenges.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevChallenges.io
          </a>
        </span>
      </div>
    </div>
  );
}

export default TodayHightlights;

TodayHightlights.propTypes = {
  weatherData: PropTypes.shape(createDefaultData()),
  isCelsium: PropTypes.bool,
};

TodayHightlights.defaultProps = {
  weatherData: createDefaultData(),
  isCelsium: false,
};
