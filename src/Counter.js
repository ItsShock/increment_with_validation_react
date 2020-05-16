import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super();

    this.state = {
      ticks: 0,
      isBtnDisabeld: false
    }
  }

  incrementTicks = () => {
    let { ticks } = this.state;
    ticks++;
    this.setState({ ticks }, () => {
      if(this.state.ticks === 10) {
        this.setState({isBtnDisabeld: true});
      }
    })
  }

  render() {
    return <button disabled={this.state.isBtnDisabeld} onClick={this.incrementTicks}>{this.state.ticks}</button>;
  }
}

export default Counter;
