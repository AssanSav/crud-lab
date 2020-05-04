import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from "react-redux"

class ReviewsContainer extends Component {

  render() {
    const {reviews, addReview, removeReview, restaurant} = this.props
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews reviews={reviews} restaurantId={restaurant.id} removeReview={removeReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (newReview) => dispatch({ type: "ADD_REVIEW", review: newReview }),
    removeReview: (id) => dispatch({ type: "DELETE_REVIEW", id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
