import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.items = ["Zara", "John", "Alex", "Johanas"];
  }

  render() {
    return (
      <div>
        <input type="text" />
        <ul>
          {this.items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
