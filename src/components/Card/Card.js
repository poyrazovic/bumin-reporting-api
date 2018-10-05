import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="bg-white p-4 mb-4">
        { this.props.children }
      </div>
    );
  }
}

export default Card;