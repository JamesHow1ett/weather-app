import React, { useState } from 'react';
import PropTypes from 'prop-types';

// styles
import './SearchBar.scss';

function SearchBar(props) {
  const {
    toggleSearchBar,
    handleSearchBar,
    handleLocationId,
    locationResults,
  } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => setInputValue(event.target.value);

  const hasResults = (results) => Boolean(results.length);

  const renderSearchResult = (item, index) => {
    const key = `${item.woeid}_${index}`;
    const tabIndex = 0 - index;

    return (
      <div
        className="search-bar__cities"
        key={key}
        onClick={() => () => {
          handleLocationId(item.woeid);
          toggleSearchBar();
        }}
        onKeyDown={() => {}}
        role="button"
        tabIndex={tabIndex}
      >
        <span>{item.title}</span>
        <img
          src="/static/img/icons/chevron_right-white-18dp.svg"
          alt="chevron-right"
          className="chevron-right"
        />
      </div>
    );
  };

  return (
    <div className="search-bar">
      <div className="search-bar__btn-close-group">
        <div
          className="search-bar__btn-close"
          tabIndex={0}
          role="button"
          onClick={() => toggleSearchBar()}
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
        {
          hasResults(locationResults)
          && locationResults.map((item, index) => renderSearchResult(item, index))
        }
        {
          !hasResults(locationResults) && (
          <div className="search-bar__cities">
            <span>loading...</span>
          </div>
          )
        }
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
  toggleSearchBar: PropTypes.func.isRequired,
  handleSearchBar: PropTypes.func.isRequired,
  handleLocationId: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  locationResults: [],
};
