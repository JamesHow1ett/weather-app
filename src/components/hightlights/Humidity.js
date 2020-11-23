import React from 'react'

function Humidity(props) {
  const humidity = props.humidity

  return (
    <div className="today-hightlights__item">
      <div className="today-hightlights__label">
        <span>Humidity</span>
      </div>
      <div className="today-hightlights__info">
        <span>{ humidity }%</span>
      </div>
      <div className="today-hightlights__progress-bar">
        <div 
          className="today-hightlights__progress-bar-percentage today-hightlights__progress-bar-percentage_zero"
        />
        <div
          className="today-hightlights__progress-bar-percentage today-hightlights__progress-bar-percentage_half"
        />
        <progress
          className="progress-bar"
          max="100"
          value={humidity}
        >
        </progress>
        <div
          className="today-hightlights__progress-bar-percentage today-hightlights__progress-bar-percentage_full"
        />
      </div>
    </div>
  )
}

export default Humidity
