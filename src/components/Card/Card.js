import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  cardHeading() {
    // eslint-disable-next-line react/prop-types
    if (this.props.heading) {
      return <h3 className="text-primary">{this.props.heading}</h3>;
    }
    return '';
  }
  render() {
    return (
      <div className="Card bg-white p-4 mb-4">
        {this.cardHeading()}
        {this.props.children /* eslint-disable-line react/prop-types */}
      </div>
    );
  }
}

export default Card;
