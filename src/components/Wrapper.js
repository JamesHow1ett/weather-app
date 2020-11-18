import React from 'react'
//import PropTypes from 'prop-types'
import dataFromApi from '../lib/Api'
import defaultWeatherData from '../lib/DefaultWeatherData'

//components
import SearchBar from './search_bar/SearchBar'
import TodayHightlights from './hightlights/TodayHightlights'
import TodayWeather from './today_weather/TodayWeather'
import WeatherForWeek from './weather_for_week/WeatherForWeek'

//styles
import './Wrapper.scss'

//initialize defaultWeatherData object
const defaultData = defaultWeatherData()


class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.getGeolocation = this.getGeolocation.bind(this)
    this.getSearchResultsInput = this.getSearchResultsInput.bind(this)
    this.getGeolocationData = this.getGeolocationData.bind(this)
    this.handleGetLocation = this.handleGetLocation.bind(this)
    this.handleSearchBar = this.handleSearchBar.bind(this)
    this.handleLocationId = this.handleLocationId.bind(this)
    this.handleIsSearchBar = this.handleIsSearchBar.bind(this)
    this.handleIsCelsium = this.handleIsCelsium.bind(this)
    this.state = {
      weatherData: {},
      locationResults: [],
      locationNum: 44418,
      isSearchBar: false,
      isCelsium: true,
    }
  }

  componentDidMount() {
    dataFromApi(`/api/location/${this.state.locationNum}/`)
      .then(res => this.setState({weatherData: res}))
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.locationNum !== prevState.locationNum) {
      dataFromApi(`/api/location/${this.state.locationNum}`)
        .then(res => this.setState({weatherData: res}))
        .catch(err => Error(err))
    }
  }

  async getSearchResultsInput (inputValue) {
    return dataFromApi(`/api/location/search/?query=${inputValue}`)
            .then(res => this.setState({locationResults: res}))
            .catch(err => Error(err))
  }

  async getGeolocationData ({latitude, longitude}) {
    return dataFromApi(`/api/location/search/?lattlong=${latitude},${longitude}`)
            .then(res => this.setState({locationNum: res[0]['woeid']}))
            .catch(err => Error(err))
  }

  getGeolocation (callback) {
    function success (position) {
      const longitude = position.coords.longitude || 1;
      const latitude = position.coords.latitude || 1;
      const coordsObj = {
        latitude: +latitude.toFixed(3),
        longitude: +longitude.toFixed(3),
      }
      return callback(coordsObj)
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success)
    }
  }

  handleGetLocation () {
    return this.getGeolocation(this.getGeolocationData)
  }

  handleSearchBar (inputValue = 'lozova') {
    let trimStr = inputValue.replace(/"|'/, '').toLowerCase()
    return this.getSearchResultsInput(trimStr)
  }

  handleLocationId (locationId = '01') {
    let convertToNum = +locationId
    return this.setState({locationNum: convertToNum})
  }

  handleIsSearchBar () {
    return this.setState({isSearchBar: !this.state.isSearchBar})
  }

  handleIsCelsium () {
    return this.setState({isCelsium: !this.state.isCelsium})
  }
  
  render () {
    return (
      <div className="wrapper">
        <div className="component component-today-weather">
          {
            this.state.isSearchBar &&
              <SearchBar
                locationResults={this.state.locationResults}
                handleSearchBar={this.handleSearchBar}
                handleLocationId={this.handleLocationId}
                handleIsSearchBar={this.handleIsSearchBar}
              />
          }
          {
            !this.state.isSearchBar &&
            <TodayWeather
              weatherData={this.state.weatherData}
              defaultData={defaultData}
              handleSearchBar={this.handleSearchBar}
              handleIsSearchBar={this.handleIsSearchBar}
              handleGetLocation={this.handleGetLocation}
              isCelsium={this.state.isCelsium}
            />
          }
        </div>
        <div className="component-wrapper">
          <div className="component component-weather-for-week">
            <WeatherForWeek
              weatherData={this.state.weatherData}
              defaultData={defaultData}
              handleIsCelsium={this.handleIsCelsium}
              isCelsium={this.state.isCelsium}
            />
          </div>
          <div className="component component-today-hightlights">
            <TodayHightlights
              weatherData={this.state.weatherData}
              defaultData={defaultData}
              isCelsium={this.state.isCelsium}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Wrapper
