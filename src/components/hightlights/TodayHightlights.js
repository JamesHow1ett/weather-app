import React from 'react'
import PropTypes from 'prop-types'

//components
import WindStatus from './WindStatus'
import Humidity from './Humidity'
import Visibility from './Visibility'
import AirPressure from './AirPressure'

//styles
import './TodayHightlights.scss'


function TodayHightlights (props) {
  const webData = props.weatherData
  const defaultData = props.defaultData
  const isCelsium = props.isCelsium
  const consolidatedWeather = webData['consolidated_weather'] ?? defaultData['consolidated_weather']

  return (
    <div className="today-hightlights">
      <div className="today-hightlights__header">
      <span>Today's Hightlights for { webData['title'] ?? '' }</span>
      </div>
      <div className="today-hightlights__wrapper">
        <div className="today-hightlights__box">
          <WindStatus
            isCelsium={isCelsium}
            windSpeed={Number(consolidatedWeather[0]['wind_speed'])}
            windDirectionCompass={consolidatedWeather[0]['wind_direction_compass']}
          />
        </div>
        <div className="today-hightlights__box">
          <Humidity
            humidity={consolidatedWeather[0]['humidity']}
          />
        </div>
        <div className="today-hightlights__box today-hightlights__box_small">
          <Visibility
            visibility={Number(consolidatedWeather[0]['visibility'])}
            isCelsium={isCelsium}  
          />
        </div>
        <div className="today-hightlights__box today-hightlights__box_small">
          <AirPressure 
            airPressure={consolidatedWeather[0]['air_pressure']}
          />
        </div>
      </div>
      <div className="today-hightlights__dev-sign">
        <span>Oleksandr Skorokhod @&nbsp;
          <a
            href="https://devchallenges.io/"
            target="_blank"
            rel="noopener noreferrer"
          >DevChallenges.io
          </a>
        </span>
      </div>
    </div>
  )
}

export default TodayHightlights

TodayHightlights.propTypes = {
  webData: PropTypes.object,
  defaultData: PropTypes.object.isRequired
}
