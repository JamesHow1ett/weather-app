import React, { useEffect, useState } from 'react';


//styles
import './SearchBar.scss';

function SearchBar () {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => setInputValue(event.target.value);


  return (
    <div className="search-bar">
      <div className="search-bar__btn-close-group">
        <div className="search-bar__btn-close">
          <img src="/static/img/icons/baseline_clear_white_18dp.png" alt="btn-close"></img>
        </div>
      </div>
      <div className="search-bar__search-input-group">
        <input className="search-bar__input" type="text" placeholder="search location" value={inputValue} onChange={handleChange}></input>
        <button className="search-bar__btn-search">Search</button>
      </div>
      <div className="search-bar__search-results">
        <div className="search-bar__cities"><span>London</span></div>
        <div className="search-bar__cities"><span>Lozova</span></div>
        <div className="search-bar__cities"><span>Long Beach</span></div>
      </div>
    </div>
  )

}

export default SearchBar
