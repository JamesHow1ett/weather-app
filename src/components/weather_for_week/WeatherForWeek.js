import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class WeatherForWeek extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>WeatherForWeek!!!
        <div className="next-day"></div>
        <div className="next-day"></div>
        <div className="next-day"></div>
        <div className="next-day"></div>
        <div className="next-day"></div>
      </div>
    )
  }
}
