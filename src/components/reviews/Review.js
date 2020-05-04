import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, removeReview } = this.props
 
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => removeReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
