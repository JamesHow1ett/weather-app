import React from 'react';
import PropTypes from 'prop-types';
import Converter from '../../lib/utils/Converter';

function WindStatus(props) {
  const {
    isCelsium,
    windSpeed,
    windDirectionCompass,
  } = props;

  const windDirectionImageClass = `today-hightlights__wind-direction-img_${windDirectionCompass}`;

  const renderWindSpeed = (value) => {
    if (isCelsium) {
      return (
        <span>
          { new Converter(value).toKilometrsFromMiles().toFixed(1) }
          <span className="today-hightlights__info_small">&nbsp;kph</span>
        </span>
      );
    }

    return (
      <span>
        { Number(value).toFixed(1) }
        <span className="today-hightlights__info_small">&nbsp;mph</span>
      </span>
    );
  };

  return (
    <div className="today-hightlights__item">
      <div className="today-hightlights__label">
        <span>Wind status</span>
      </div>
      <div className="today-hightlights__info">
        { renderWindSpeed(windSpeed) }
      </div>
      <div className="today-hightlights__wind-direction">
        <div>
          <img
            src="/static/img/icons/navigation-white-18dp.svg"
            alt="wind_direction_compass"
            className={`today-hightlights__wind-direction ${windDirectionImageClass}`}
          />
        </div>
        <span>
          { windDirectionCompass }
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
