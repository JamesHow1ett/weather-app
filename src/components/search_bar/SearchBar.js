import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>SearchBar!!!
        <div>search input and btn</div>
        <div>previously locations</div>
      </div>
    )
  }
}
