import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  cardHeading() {
    if(this.props.heading) {
      return <h3 className="text-primary">{ this.props.heading }</h3>
    }
  }
  render() {
    return (
      <div className="Card bg-white p-4 mb-4">
        { this.cardHeading() }
        { this.props.children }
      </div>
    );
  }
}

export default Card;