import React from 'react';
import './App.css';

//components
import SearchBar from './components/search_bar/SearchBar';
import TodayHightlights from './components/hightlights/TodayHightlights';
import TodayWeather from './components/today_weather/TodayWeather';
import WeatherForWeek from './components/weather_for_week/WeatherForWeek';

function App() {
  return (
    <div className="App">
      <div>
        <TodayWeather />
      </div>
      <div>
        <WeatherForWeek />
        <TodayHightlights />
      </div>
    </div>
  );
}

export default App;
