import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodayWeather extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <div>search bar and location</div>
        <div>weather icon</div>
        <div>tempreture</div>
        <div>weather name</div>
        <div>date and current location</div>
      </div>
    )
  }
}
