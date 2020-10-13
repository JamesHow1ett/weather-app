import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
import './TodayWeather.scss';

export default class TodayWeather extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="today-weather">
        <div className="today-weather__btn-search-group">
          <div className="today-weather__btn-search"><span>Seach for places</span></div>
          <div className="today-weather__btn-location">
            <img src="/static/img/icons/baseline_gps_fixed_white_18dp.png" alt="gps logo"></img>
          </div>
        </div>
        <div className="today-weather__current-weather">
          <div className="today-weather__weather-icon">
            <img src="/static/img/weather/png/t.png" alt="weather-icon"></img>
          </div>
          <div className="today-weather__weather-detail">
            <div className="today-weather__weather-temp">15<span>&#176;С</span></div>
            <div className="today-weather__weather-name">Thunderstorm</div>
          </div>
          <div className="today-weather__weather-location">
            <div className="today-weather__date-group">
              <div className="today-weather__today">Today</div>
              <div className="today-weather__full-date">Thu, 10 Oct</div>
            </div>
            <div className="today-weather__city">
              <div className="today-weather__city-icon">
                <img src="/static/img/icons/baseline_place_white_18dp.png" alt="city-icon"></img>
              </div>
              <div className="today-weather__city-name">Kharkiv</div>
            </div>
          </div>
        </div>    
      </div>
    )
  }
}
