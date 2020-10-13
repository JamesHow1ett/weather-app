import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodayHightlights extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>TodayHightlights!!!
        <div className="wind-status"></div>
        <div className="humidity"></div>
        <div className="visibility"></div>
        <div className="air-pressure"></div>
      </div>
    )
  }
}
