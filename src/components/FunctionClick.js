import React, { Component } from "react";

function FunctionClick() {
  function clickHandler1() {
    console.log("Button 1:  onClick = {clickHandler}");
  }

  function clickHandler2() {
    console.log("Button 2: onClick = {() => clickHandler()");
  }

  return (
    <div>
      <button onClick={clickHandler1}>Button 1</button>
      <button onClick={() => clickHandler2()}>Button 2</button>
    </div>
  );
}

export default FunctionClick;
