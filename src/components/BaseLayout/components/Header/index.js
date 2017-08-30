import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="header">
        <h1 id="header-title">Shop Now</h1>
        <div className="links-header">
          <img src={this.props.image} />
          <p><NavLink activeClassName="selected" className="nav-link-header" to="/women">Women</NavLink></p>
          <p><NavLink activeClassName="selected" className="nav-link-header" to="/men">Men</NavLink></p>
        </div>
      </div>
    )
  }
}
