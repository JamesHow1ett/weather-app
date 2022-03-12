import React from 'react';
import PropTypes from 'prop-types';
import Converter from '../../lib/utils/Converter';

function WindStatus(props) {
  const {
    isCelsium,
    windSpeed,
    windDirectionCompass,
  } = props;

  return (
    <div className="today-hightlights__item">
      <div className="today-hightlights__label">
        <span>Wind status</span>
      </div>
      <div className="today-hightlights__info">
        {isCelsium
          ? (
            <span>
              {
          Converter(windSpeed).toKilometrsFromMiles().toFixed(1)
        }
              <span className="today-hightlights__info_small">&nbsp;kph</span>
            </span>
          )
          : (
            <span>
              {
          Number(windSpeed).toFixed(1)
        }
              <span className="today-hightlights__info_small">&nbsp;mph</span>
            </span>
          )}
      </div>
      <div className="today-hightlights__wind-direction">
        <div>
          <img
            src="/static/img/icons/navigation-white-18dp.svg"
            alt="wind_direction_compass"
            className={`today-hightlights__wind-direction today-hightlights__wind-direction-img_${windDirectionCompass}`}
          />
        </div>
        <span>
          {
          windDirectionCompass
        }
        </span>
      </div>
    </div>
  );
}

export default WindStatus;

WindStatus.propTypes = {
  isCelsium: PropTypes.bool.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirectionCompass: PropTypes.string.isRequired,
};
