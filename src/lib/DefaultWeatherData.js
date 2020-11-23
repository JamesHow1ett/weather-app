//use this object when waiting data from api
const defaultWeatherData = () => ({
  consolidated_weather: [{
    air_pressure: 0,
    humidity: 0,
    max_temp: 0,
    min_temp: 0,
    the_temp: 0,
    visibility: 0.0,
    weather_state_abbr: 'c',
    weather_state_name: 'Clear',
    wind_speed: 0.0,
    wind_direction_compass: 'N',
  }],
  title: 'Lozova',
  dateOptions: {
    day: 'numeric',
    month: 'short',
    weekday: 'short'
  }
});

export default defaultWeatherData;