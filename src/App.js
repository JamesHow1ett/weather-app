import React from 'react'
import dataFromApi from './lib/Api'

import './App.css'

//components
import Wrapper from './components/Wrapper'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: {},
      weatherData: {},
      woeid: []
    }
  }

  componentDidMount() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => this.setState({
    //     coords: {
    //       latt: +position.coords.latitude.toFixed(3),
    //       long: +position.coords.longitude.toFixed(3)
    //     }
    //   }))
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (!!this.state.coords['latt'] && !(this.state.woeid !== prevState.woeid)) {
    //   dataFromApi(`/api/location/search/?lattlong=${this.state.coords['latt']},${this.state.coords['long']}`)
    //     .then(res => ({woeid: res[0]['woeid']}))
    //     .then(async ({woeid}) => {
    //       const res = await dataFromApi(`/api/location/${woeid}`)
    //       return this.setState({weatherData: res})
    //     })
    //     .catch(err => Error(err))
    // }
    // if (!!this.state.woeid[0]) {
    //   console.log('ok')
    // }
  }

  render() {
    return (
      <div className="App">
        <Wrapper />
      </div>
    );
  }
}

export default App
