import React from 'react'
//import PropTypes from 'prop-types'
import defaultWeatherData from '../../lib/DefaultWeatherData'
import { toFahrenheit } from '../../lib/convertr'

//styles
import './WeatherForWeek.scss'

//initialize defaultWeatherData object
const defaultData = defaultWeatherData()

function WeatherForWeek (props) {
  const celsius = props.isCelsium
  const webData = props.weatherData

  return (
    <div className="week-weather">
      <div className="convert-tempreture-btn-group">
        <div
          className={`convert-tempreture-btn-group__btn ${!!celsius ? 'active' : ''}`}
          onClick={(() => props.handleIsCelsium())}>
          <span>&#176;С</span>
        </div>
        <div
          className={`convert-tempreture-btn-group__btn ${!!celsius ? '' : 'active'}`}
          onClick={(() => props.handleIsCelsium())}>
          <span>&#176;F</span>
        </div>
      </div>
      <div className="weather-next-day">
        {
          webData['consolidated_weather'] ?
          webData['consolidated_weather'].map((item, index) => (
            index > 0 ? (
              <div className="weather-next-day__item" key={index}>
                <div className="weather-next-day__day-name">
                  <span>
                  {
                    index === 1 ?
                    'Tomorrow' :
                    new Date(item['applicable_date']).toLocaleDateString('en-GB', defaultData['dateOptions'])
                  }
                  </span>
                </div>
                <div className="weather-next-day__weather-icon">
                  <img src={`/static/img/weather/png/${item['weather_state_abbr']}.png`} alt="weather icon"></img>
                </div>
                <div className="weather-next-day__temp">
                  {!!celsius ?
                  <>
                    <span className="weather-next-day__temp_max">{Number(item['max_temp'].toFixed(0))}&#176;С</span>
                    <span className="weather-next-day__temp_min">{Number(item['min_temp'].toFixed(0))}&#176;С</span>
                  </> :
                  <>
                    <span className="weather-next-day__temp_max">{toFahrenheit(Number(item['max_temp'].toFixed(0)))}&#176;F</span>
                    <span className="weather-next-day__temp_min">{toFahrenheit(Number(item['min_temp'].toFixed(0)))}&#176;F</span>
                  </>}
                </div>
              </div>
            ) : ''
          )) :
          <div className="weather-next-day__item">
            <div className="weather-next-day__day-name">
              <span>{ new Date().toLocaleDateString('en-GB', props.dateOptions) }</span>
            </div>
            <div className="weather-next-day__weather-icon">
              <img src={`/static/img/weather/png/${defaultData['consolidated_weather']['weather_state_abbr']}.png`} alt="weather icon" />
            </div>
            <div className="weather-next-day__temp">
              <span className="weather-next-day__temp_max">{defaultData['consolidated_weather']['max_temp']}&#176;С</span>
              <span className="weather-next-day__temp_min">{defaultData['consolidated_weather']['min_temp']}&#176;С</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default WeatherForWeek

// WeatherForWeek.propTypes = {
//   props: PropTypes.object.isRequired
// }
