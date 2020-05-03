import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {

  render() {
    const { removeRestaurant, restaurants} = this.props
    return(
      <ul>
        {restaurants.map(restaurant => <Restaurant removeRestaurant={removeRestaurant} key={restaurant.id} restaurant={restaurant}/>)}
      </ul>
    );
  }
};

export default Restaurants;