import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
    this.handleOnchange = this.handleOnchange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnchange(e) {

    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit(e) {
    // debugger
    e.preventDefault()
    if (this.state.text !== "") {
      this.props.addRestaurant(this.state.text)
      this.setState({
        text: ""
      })
    } 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnchange} placeholder="Enter A Restaurant Name" value={this.state.text}></input>
          <input type="submit" ></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
