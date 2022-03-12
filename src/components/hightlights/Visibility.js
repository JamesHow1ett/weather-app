import React from 'react';
import PropTypes from 'prop-types';
import Converter from '../../lib/utils/Converter';

function Visibility(props) {
  const { visibility, isCelsium } = props;

  return (
    <div className="today-hightlights__item">
      <div className="today-hightlights__label">
        <span>Visibility</span>
      </div>
      <div className="today-hightlights__info">
        {isCelsium
          ? (
            <span>
              {
          Converter(visibility).toKilometrsFromMiles().toFixed(1)
        }
              <span className="today-hightlights__info_small">&nbsp;km</span>
            </span>
          )
          : (
            <span>
              {
          visibility.toFixed(1)
        }
              <span className="today-hightlights__info_small">&nbsp;miles</span>
            </span>
          )}
      </div>
    </div>
  );
}

export default Visibility;

Visibility.propTypes = {
  isCelsium: PropTypes.bool.isRequired,
  visibility: PropTypes.number.isRequired,
};
