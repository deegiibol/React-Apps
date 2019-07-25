import React, { Component } from "react";

class ClassClick extends Component {
  state = {
    count: 0
  };

  clickHandler1() {
    console.log("this: ", this);
    console.log("Button 1: onClick = {this.clickHandler}");
  }

  clickHandler2() {
    console.log("Button 2: onClick = {() => this.clickHandler()}");
    console.log("this: ", this);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler1}>Button 1</button>
        <button onClick={() => this.clickHandler2()}>Button 2</button>
        <button onClick={this.clickHandler1.bind(this)}>Button 3</button>
      </div>
    );
  }
}

export default ClassClick;
