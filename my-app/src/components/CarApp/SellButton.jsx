import React from "react";

export default class SellButton extends React.Component {
  render() {
    const { make } = this.props.car;
    return <button onClick={this.props.handleSell}>Sell {make}</button>;
  }
}
