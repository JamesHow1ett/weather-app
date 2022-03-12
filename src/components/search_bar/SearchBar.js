import React, { useState } from 'react';
import PropTypes from 'prop-types';

// styles
import './SearchBar.scss';

function SearchBar(props) {
  const {
    handleIsSearchBar,
    handleSearchBar,
    handleLocationId,
    locationResults,
  } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <div className="search-bar">
      <div className="search-bar__btn-close-group">
        <div
          className="search-bar__btn-close"
          tabIndex={0}
          role="button"
          onClick={(() => handleIsSearchBar())}
          // TODO: implement logic
          onKeyUp={() => {}}
        >
          {/* <img src="/static/img/icons/baseline_clear_white_18dp.png" alt="btn-close" /> */}
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
        <button
          type="button"
          className="search-bar__btn-search"
          onClick={(() => handleSearchBar(inputValue))}
        >
          Search
        </button>
      </div>
      <div className="search-bar__search-results">
        {locationResults
          ? locationResults.map((item, index) => (
            <div
              className="search-bar__cities"
              key={`${item.woeid}_${index + 0}`}
              onClick={() => () => {
                handleLocationId(item.woeid);
                handleIsSearchBar();
              }}
              onKeyDown={() => {}}
              role="button"
              tabIndex={index + 1}
            >
              <span>{item.title}</span>
              <img
                src="/static/img/icons/chevron_right-white-18dp.svg"
                alt="chevron-right"
                className="chevron-right"
              />
            </div>
          ))
          : (
            <div className="search-bar__cities">
              <span>loading...</span>
            </div>
          )}
      </div>
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  locationResults: PropTypes.arrayOf(PropTypes.shape({
    woeid: PropTypes.string,
    title: PropTypes.string,
  })),
  handleIsSearchBar: PropTypes.func.isRequired,
  handleSearchBar: PropTypes.func.isRequired,
  handleLocationId: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  locationResults: [{
    woeid: 'woeid',
    title: 'title',
  }],
};
