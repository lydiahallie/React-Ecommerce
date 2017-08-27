import React, {Component} from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import Home from '../Home';
import Contact from '../Contact';

export default class BaseLayout extends Component {
  render() {
    return(
      <div>
        {/*HEADER*/}
        <div className="header">
          <h1>E-Commerce</h1>
        </div>

        {/*NAVBAR*/}
        <nav className="nav-bar">
          <ul>
            <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        {/* CONTENT */}
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
