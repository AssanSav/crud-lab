import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from "react-redux"

class RestaurantsContainer extends Component {

  render() {
    const {addRestaurant, restaurants, removeRestaurant} = this.props
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant}/>
        <Restaurants restaurants={restaurants} removeRestaurant={removeRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (newRestaurant) => dispatch({ type: "ADD_RESTAURANT", restaurant: newRestaurant }),
    removeRestaurant: (id) => dispatch({ type: "DELETE_RESTAURANT", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
