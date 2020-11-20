import React from 'react'
import PropTypes from 'prop-types'
import Convert from '../../lib/Convertr'

//styles
import './WeatherForWeek.scss'


function WeatherForWeek (props) {
  const celsius = props.isCelsium
  const webData = props.weatherData
  const defaultData = props.defaultData
  const consolidatedWeather = webData['consolidated_weather'] || defaultData['consolidated_weather']

  return (
    <div className="week-weather">
      <div className="convert-tempreture-btn-group">
        <div
          className={`convert-tempreture-btn-group__btn ${celsius ? 'active' : ''}`}
          onClick={(() => props.handleIsCelsium())}>
          <span>&#176;С</span>
        </div>
        <div
          className={`convert-tempreture-btn-group__btn ${celsius ? '' : 'active'}`}
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
                  {celsius ?
                  <>
                    <span className="weather-next-day__temp_max">{Number(item['max_temp'].toFixed(0))}&#176;С</span>
                    <span className="weather-next-day__temp_min">{Number(item['min_temp'].toFixed(0))}&#176;С</span>
                  </> :
                  <>
                    <span className="weather-next-day__temp_max">{new Convert(Number(item['max_temp'])).toFahrenheitFromCelsius()}&#176;F</span>
                    <span className="weather-next-day__temp_min">{new Convert(Number(item['min_temp'])).toFahrenheitFromCelsius()}&#176;F</span>
                  </>
                  }
                </div>
              </div>
            ) : ''
          )) :
          <div className="weather-next-day__item">
            <div className="weather-next-day__day-name">
              <span>{ new Date().toLocaleDateString('en-GB', props.dateOptions) }</span>
            </div>
            <div className="weather-next-day__weather-icon">
              <img src={`/static/img/weather/png/${defaultData['consolidated_weather'][0]['weather_state_abbr']}.png`} alt="weather icon" />
            </div>
            <div className="weather-next-day__temp">
              <span className="weather-next-day__temp_max">{defaultData['consolidated_weather'][0]['max_temp']}&#176;С</span>
              <span className="weather-next-day__temp_min">{defaultData['consolidated_weather'][0]['min_temp']}&#176;С</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default WeatherForWeek

WeatherForWeek.propTypes = {
  isCelsium: PropTypes.bool,
  weatherData: PropTypes.object,
  defaultData: PropTypes.object.isRequired
}
