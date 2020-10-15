import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
import './TodayHightlights.scss';

export default class TodayHightlights extends Component {

  render() {
    return (
      <div className="today-hightlights">
        <div className="today-hightlights__header">
          <span>Today's Hightlights</span>
        </div>
        <div className="today-hightlights__wrapper">
          <div className="today-hightlights__box">
            <div className="today-hightlights__item">
              <div className="today-hightlights__label">
                <span>Wind status</span>
              </div>
              <div className="today-hightlights__info">
                <span>{Number(this.props.dataApi.data[0]['wind_speed']).toFixed(1)}<span className="today-hightlights__info_small">&nbsp;mph</span></span>
              </div>
              <div className="today-hightlights__wind-direction">
                <img src="" alt=""></img>
                <span>{this.props.dataApi.data[0]['wind_direction_compass']}</span>
              </div>
            </div>
          </div>
          <div className="today-hightlights__box">
            <div className="today-hightlights__item">
              <div className="today-hightlights__label">
                <span>Humidity</span>
              </div>
              <div className="today-hightlights__info">
                <span>{this.props.dataApi.data[0]['humidity']}%</span>
              </div>
              <div className="today-hightlights__progress-bar">
                <progress className="progress-bar" max="100" value={this.props.dataApi.data[0]['humidity']}></progress>
              </div>
            </div>
          </div>
          <div className="today-hightlights__box today-hightlights__box_small">
            <div className="today-hightlights__item">
              <div className="today-hightlights__label">
                <span>Visibility</span>
              </div>
              <div className="today-hightlights__info">
                <span>{Number(this.props.dataApi.data[0]['visibility']).toFixed(1)}<span className="today-hightlights__info_small">&nbsp;miles</span></span>
              </div>
            </div>
          </div>
          <div className="today-hightlights__box today-hightlights__box_small">
            <div className="today-hightlights__item">
              <div className="today-hightlights__label">
                <span>Air Pressure</span>
              </div>
              <div className="today-hightlights__info">
                <span>{Number(this.props.dataApi.data[0]['air_pressure']).toFixed(0)}<span className="today-hightlights__info_small">&nbsp;mb</span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="today-hightlights__dev-sign"></div>
      </div>
    )
  }
}

TodayHightlights.propTypes = {
  dataApi: PropTypes.object.isRequired
}
