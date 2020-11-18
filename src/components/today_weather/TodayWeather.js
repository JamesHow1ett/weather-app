import React from 'react'
import PropTypes from 'prop-types'
import Convertr from '../../lib/Convertr'

//styles
import './TodayWeather.scss'


function TodayWeather (props) {
  const webData = props.weatherData
  const defaultData = props.defaultData

  return (
    <div className="today-weather">
      <div className="today-weather__btn-search-group">
        <div className="today-weather__btn-search" onClick={(() => props.handleIsSearchBar())}>
          <span>Seach for places</span>
        </div>
        <div className="today-weather__btn-location" onClick={(() => props.handleGetLocation())}>
          <img src="/static/img/icons/baseline_gps_fixed_white_18dp.png" alt="gps logo" />
        </div>
      </div>
      <div className="today-weather__current-weather">
        <div className="today-weather__weather-icon">
          <img
            src={`/static/img/weather/png/${webData['consolidated_weather'] ?
              webData['consolidated_weather'][0]['weather_state_abbr'] :
              defaultData['consolidated_weather']['weather_state_abbr']}.png`}
            alt="weather-icon"
            />
        </div>
        <div className="today-weather__weather-detail">
          {!!props.isCelsium ?
          <div
            className="today-weather__weather-temp">
            {
              Number(webData['consolidated_weather'] ?
              webData['consolidated_weather'][0]['the_temp'] :
              defaultData['consolidated_weather']['the_temp']).toFixed(0)
            }
            <span>&#176;С</span>
          </div> :
          <div
            className="today-weather__weather-temp">
          {
            new Convertr().toFahrenheitFromCelsius(Number(webData['consolidated_weather'] ?
            webData['consolidated_weather'][0]['the_temp'] :
            defaultData['consolidated_weather']['the_temp']))
          }
          <span>&#176;F</span>
        </div>
          }
          <div className="today-weather__weather-name">
            {
              webData['consolidated_weather'] ?
              webData['consolidated_weather'][0]['weather_state_name'] :
              defaultData['consolidated_weather']['weather_state_name']
            }
          </div>
        </div>
        <div className="today-weather__weather-location">
          <div className="today-weather__date-group">
            <div className="today-weather__today">Today</div>
            <div className="today-weather__full-date">
              { new Date().toLocaleDateString('en-GB', defaultData['dateOptions']) }
            </div>
          </div>
          <div className="today-weather__city">
            <div className="today-weather__city-icon">
              <img src="/static/img/icons/baseline_place_white_18dp.png" alt="city-icon" />
            </div>
            <div className="today-weather__city-name">
              { webData ? webData['title'] : defaultData['title'] }
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default TodayWeather

TodayWeather.propTypes = {
  weatherData: PropTypes.object,
  defaultData: PropTypes.object.isRequired
}
