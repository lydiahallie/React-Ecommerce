import React, {Component} from 'react';
import './styles.css';
import Contact from '../Contact';
import App from '../App';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return(
      <div className="">
        <div className="header">
          <h1>E-Commerce</h1>
        </div>
        <BrowserRouter>
          <div className="nav-bar">
            <ul>
              <li><NavLink ctiveClassName="selected" className="nav-link" to="/">Home</NavLink></li>
              <li><NavLink ctiveClassName="selected" className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>

            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default BaseLayout;
