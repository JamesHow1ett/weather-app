import React, { Component } from 'react'
import PropTypes from 'prop-types'

//components
import SearchBar from './search_bar/SearchBar';
import TodayHightlights from './hightlights/TodayHightlights';
import TodayWeather from './today_weather/TodayWeather';
import WeatherForWeek from './weather_for_week/WeatherForWeek';

//styles
import './Wrapper.scss';

export default class Wrapper extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="wrapper">
        <div className="component component-today-weather">
          <TodayWeather />
        </div>
        <div className="component-wrapper">
          <div className="component component-weather-for-week">
            <WeatherForWeek />
          </div>
          <div className="component component-today-hightlights">
            <TodayHightlights />
          </div>
        </div>
      </div>
    )
  }
}
