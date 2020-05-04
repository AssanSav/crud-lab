import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {

  render() {
    const { removeRestaurant, restaurants } = this.props
    return(
      <ul>
        {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} removeRestaurant={removeRestaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;