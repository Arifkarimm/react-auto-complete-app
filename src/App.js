import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.items = ["Zara", "John", "Alex", "Johanas"];
    this.state = {
      suggestions: []
    };
    this.onClickSuggestions = this.onClickSuggestions.bind(this);
  }

  onClickSuggestions(event) {
    const value = event.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^$(value)`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }

    this.setState({
      suggestions: suggestions
    });
  }

  render() {
    console.log(this.state.suggestions);
    return (
      <div>
        <input onChange={this.onClickSuggestions} type="text" />
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
