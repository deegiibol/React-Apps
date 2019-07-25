import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      <EventBind />
    </div>
  );
}

export default App;
