// Dependencies
import React, { Component } from 'react';
// Externals
import Header from './components/Header';
import Navbar from './components/Navbar';
// Internals
import './index.css';


class BaseLayout extends Component {
  render() {
    return(
      <div>
        <Header />
        <Navbar />
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}

export default BaseLayout;
