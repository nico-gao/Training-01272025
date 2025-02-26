import React from "react";

export default class CarInfo extends React.Component {
  render() {
    const { make, quantity } = this.props.car;
    return (
      <div>
        <div>{make}</div>
        <div>{quantity}</div>
      </div>
    );
  }
}
