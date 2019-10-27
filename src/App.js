import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.onHandleClick}>TooGle</button>
        {!this.state.isHidden && <Display />}
      </div>
    );
  }
}

const Display = () => {
  return <h2>Display</h2>;
};
export default App;
