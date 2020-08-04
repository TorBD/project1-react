import React, { Component } from "react";

export default class CounterClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#a2de96" }}>
        <h1>Counter Class Component</h1>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
      </div>
    );
  }
}
