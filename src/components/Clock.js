import React, { Component } from "react";

class Clock extends Component {
  totalTime = this.props.brewTime + this.props.bloomTime;
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timeLeft: this.totalTime
    };
  }
  tick() {
    this.setState((prevState, props) => ({
      timeLeft: prevState.timeLeft - 1
    }));
  }
  startTimer = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({
      isRunning: true
    });
  };
  stopTimer = () => {
    clearInterval(this.timerID);
    this.setState({
      isRunning: false
    });
  };
  componentWillUnmount() {
    this.stopTimer();
  }
  render() {
    const isRunning = this.state.isRunning;
    let display =
      this.state.timeLeft >= this.props.brewTime ? "Bloom" : "Pourover";
    return (
      <div
        className="clock"
        onClick={isRunning ? this.stopTimer : this.startTimer}
      >
        <h2 className="clock--header">
          {!isRunning && this.totalTime > this.state.timeLeft
            ? "Paused"
            : display}
        </h2>
        <h3>{this.state.timeLeft}</h3>
      </div>
    );
  }
}

export default Clock;
