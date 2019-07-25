import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };
    // this.changeMessage = this.changeMessage.bind(this); // Set with Button 1
  }

  changeMessage() {
    this.setState(
      {
        message: "Goodbye!"
      },
      () => console.log("this: ", this)
    );
  }

  changeMessageFunc = () => {
    this.setState(
      {
        message: "Goodbye!"
      },
      () => console.log("this: ", this)
    );
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changeMessage}>Button 1</button> */}
        <button onClick={this.changeMessage.bind(this)}>Button 2</button>
        <button onClick={() => this.changeMessage()}>Button 3</button>
        <button onClick={this.changeMessageFunc}>Button 4</button>
      </div>
    );
  }
}

export default EventBind;
