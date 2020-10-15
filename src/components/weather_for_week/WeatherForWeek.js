import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
import './WeatherForWeek.scss';

export default class WeatherForWeek extends Component {

  render() {
    return (
      <div className="week-weather">
        <div className="convert-tempreture-btn-group">
          <div className="convert-tempreture-btn-group__btn convert-tempreture-btn-group__btn active">
            <span>&#176;С</span>
          </div>
          <div className="convert-tempreture-btn-group__btn">
            <span>&#176;F</span>
          </div>
        </div>
        <div className="weather-next-day">
          {this.props.dataApi.data.map((item, index) => (
          <div className="weather-next-day__item" key={index}>
            <div className="weather-next-day__day-name">
              <span>{new Date().toLocaleDateString('en-GB', this.props.dataApi.dateOptions)}</span>
            </div>
            <div className="weather-next-day__weather-icon">
              <img src={`/static/img/weather/png/${item['weather_state_abbr']}.png`} alt="weather icon"></img>
            </div>
            <div className="weather-next-day__temp">
              <span className="weather-next-day__temp_max">{Number(item['max_temp']).toFixed()}&#176;С</span>
              <span className="weather-next-day__temp_min">{Number(item['min_temp']).toFixed()}&#176;С</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    )
  }
}

WeatherForWeek.propTypes = {
  dataApi: PropTypes.object.isRequired
}
