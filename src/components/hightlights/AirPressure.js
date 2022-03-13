import React from 'react';
import PropTypes from 'prop-types';

function AirPressure(props) {
  const { airPressure } = props;

  return (
    <div className="today-hightlights__item">
      <div className="today-hightlights__label">
        <span>Air Pressure</span>
      </div>
      <div className="today-hightlights__info">
        <span>
          { Number(airPressure).toFixed(0) }
          <span className="today-hightlights__info_small">&nbsp;mb</span>
        </span>
      </div>
    </div>
  );
}

export default AirPressure;

AirPressure.propTypes = {
  airPressure: PropTypes.number,
};

AirPressure.defaultProps = {
  airPressure: 0,
};
