import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
import './WeatherForWeek.scss';

export default class WeatherForWeek extends Component {
  static defaultProps = {
    data: [{
      "id":5001363051249664,
      "weather_state_name":"Light Rain",
      "weather_state_abbr":"lr",
      "wind_direction_compass":"NE",
      "created":"2020-10-13T09:20:03.580598Z",
      "applicable_date":"2020-10-14",
      "min_temp":9.385,
      "max_temp":14.175,
      "the_temp":14.205,
      "wind_speed":7.945523553082002,
      "wind_direction":45.0,
      "air_pressure":1021.5,
      "humidity":66,
      "visibility":12.240391115883241,
      "predictability":75
    },
    {
      "id":4866233917767680,
      "weather_state_name":"Heavy Cloud",
      "weather_state_abbr":"hc",
      "wind_direction_compass":"NNE",
      "created":"2020-10-13T09:20:02.883578Z",
      "applicable_date":"2020-10-15",
      "min_temp":8.05,
      "max_temp":13.81,
      "the_temp":13.085,
      "wind_speed":7.843598966544714,
      "wind_direction":19.168272185233185,
      "air_pressure":1024.5,
      "humidity":64,
      "visibility":14.284080967151834,
      "predictability":71
    },
    {
      "id":4874337782857728,
      "weather_state_name":"Showers",
      "weather_state_abbr":"s",
      "wind_direction_compass":"NE",
      "created":"2020-10-13T09:20:03.790509Z",
      "applicable_date":"2020-10-16",
      "min_temp":6.944999999999999,
      "max_temp":13.4,
      "the_temp":13.14,
      "wind_speed":5.045684131578249,
      "wind_direction":48.325476765671276,
      "air_pressure":1024.0,
      "humidity":66,
      "visibility":14.30582895888014,
      "predictability":73
    },
    {
      "id":6338667825070080,
      "weather_state_name":"Heavy Cloud",
      "weather_state_abbr":"hc",
      "wind_direction_compass":"NE",
      "created":"2020-10-13T09:20:03.890183Z",
      "applicable_date":"2020-10-17",
      "min_temp":8.68,
      "max_temp":13.16,
      "the_temp":12.565000000000001,
      "wind_speed":4.993287489156658,
      "wind_direction":55.206113481514464,
      "air_pressure":1023.0,
      "humidity":78,
      "visibility":10.636632068718683,
      "predictability":71
    },
    {
      "id":5967553592557568,
      "weather_state_name":"Light Rain",
      "weather_state_abbr":"lr",
      "wind_direction_compass":"SE",
      "created":"2020-10-13T09:20:05.377758Z",
      "applicable_date":"2020-10-18",
      "min_temp":7.640000000000001,
      "max_temp":12.635,
      "the_temp":11.33,
      "wind_speed":1.762776385906307,
      "wind_direction":140.5,
      "air_pressure":1018.0,
      "humidity":71,
      "visibility":9.999726596675416,
      "predictability":75
    }],
    dateOptions: {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }
  }

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
          {this.props.data.map(item => (
          <div className="weather-next-day__item">
            <div className="weather-next-day__day-name">
              <span>{new Date().toLocaleDateString('en-GB', this.props.dateOptions)}</span>
            </div>
            <div className="weather-next-day__weather-icon">
              <img src={`/static/img/weather/png/${item['weather_state_abbr']}.png`} alt="weather icon"></img>
            </div>
            <div className="weather-next-day__temp">
              <span className="weather-next-day__temp_max">{parseInt(item['max_temp'])}&#176;С</span>
              <span className="weather-next-day__temp_min">{parseInt(item['min_temp'])}&#176;С</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    )
  }
}
