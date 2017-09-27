//Dependencies
import React, { Component } from 'react';
//Internals
import './styles.css';
import ClothesItems from './ClothesItems';

class Clothes extends Component {
  render() {
    return(
      <div className="clothes">
        <div className="clothes-title">
          <h4>Clothes</h4>
        </div>
        <ClothesItems />
      </div>
    );
  }
}

export default Clothes;
