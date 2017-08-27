import React, { Component, PropTypes } from 'react';

export default class Cart extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return(
      <div>
        <div>
          <h1>My Cart</h1>
        </div>
        <div className="result-item">
          <h4>{this.props.items}</h4>
        </div>
      </div>
    )
  }
}
