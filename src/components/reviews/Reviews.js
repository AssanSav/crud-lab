import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const {reviews, restaurantId} = this.props
    return (
      <ul>
        {/* {reviews.map(review => {
          
        })} */}
      </ul>
    );
  }
};

export default Reviews;