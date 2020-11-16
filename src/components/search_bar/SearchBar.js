import React, { useState } from 'react';


//styles
import './SearchBar.scss';

function SearchBar (props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <div className="search-bar">
      <div className="search-bar__btn-close-group">
        <div className="search-bar__btn-close" onClick={(() => props.handleIsSearchBar())}>
          <img src="/static/img/icons/baseline_clear_white_18dp.png" alt="btn-close" />
        </div>
      </div>
      <div className="search-bar__search-input-group">
        <input
          className="search-bar__input"
          type="text"
          placeholder="search location"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="search-bar__btn-search" onClick={(() => props.handleSearchBar(inputValue))}>Search</button>
      </div>
      <div className="search-bar__search-results">
        {props.locationResults ?
          props.locationResults.map((item, index) => (
          <div
            className="search-bar__cities"
            key={index}
            onClick={(() => 
            {
              return (props.handleLocationId(item['woeid']), props.handleIsSearchBar());
            })
          }>
            <span>{item.title}</span>
            <img
              src="/static/img/icons/chevron_right-white-18dp.svg"
              alt="chevron-right"
              className="chevron-right"
            />
          </div>
        )) :
          <div className="search-bar__cities">
            <span>loading...</span>
          </div>
        }
      </div>
    </div>
  )

}

export default SearchBar
