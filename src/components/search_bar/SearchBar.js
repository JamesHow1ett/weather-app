import React, { useEffect, useState } from 'react';

function SearchBar () {


  return (
    <div className="search-bar">
      <div className="today-weather__btn-search-group">
        <div className="today-weather__btn-search"><span>Seach for places</span></div>
        <div className="today-weather__btn-location">
          <img src="/static/img/icons/baseline_gps_fixed_white_18dp.png" alt="gps logo"></img>
        </div>
      </div>
    </div>
  )

}

export default SearchBar
