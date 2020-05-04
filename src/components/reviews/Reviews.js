import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurantId, removeReview } = this.props
    
    const reviewsToRender = () => {
      if (restaurantId) { 
        const filterReviews = reviews.filter(review => review.restaurantId === restaurantId)
        const mapToDisplayReviews = filterReviews.map(review => <Review key={review.id} review={review} removeReview={removeReview} />)
        return mapToDisplayReviews
      }
    }
    
    return (
      <ul>
       {reviewsToRender()}
      </ul>
    );
  }
};

export default Reviews;