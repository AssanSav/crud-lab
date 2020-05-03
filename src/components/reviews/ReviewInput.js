import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
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
    e.preventDefault()
    debugger
    // if (this.state.text !== "") {
      this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
      this.setState({
        text: ""
      })
    // }
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnchange} placeholder="Enter A Review" value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
