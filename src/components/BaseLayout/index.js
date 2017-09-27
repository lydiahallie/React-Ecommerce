// Dependencies
import React, { Component } from 'react';
// Externals
import Navbar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

const classNames = [
  "first-header",
  "second-header",
  "third-header"
];


export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex })
  }

  componentDidMount = () => {
    setInterval(this.incrementIndex, 3000);
  }

  render() {
    const index = this.state.index % classNames.length;
    const className = classNames[index];
    return(
      <div>
        <div className={className}>
          <Navbar />
          <Header />
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
