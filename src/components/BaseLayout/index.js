// Dependencies
import React, { Component } from 'react';
// Externals
import Contact from '../Contact';
import Navbar from './components/NavBar';
import Header from './components/Header';
import './index.css';


class BaseLayout extends Component {
  render() {
    return(
      <div>
        <div className="wrapper-header">
          <Navbar />
          <Header />
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}

export default BaseLayout;
