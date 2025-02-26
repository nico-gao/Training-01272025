import React from "react";
import CarInfo from "./CarInfo";
import SellButton from "./SellButton";

export default class Car extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(
    //   this.props.car.make,
    //   "shouldComponentUpdate",
    //   nextProps.car !== this.props.car
    // );
    // return nextProps.car.quantity !== this.props.car.quantity;

    nextState ??= {};
    nextProps ??= {};
    this.state ??= {};
    this.props ??= {};
    // to copy paste the entire line
    // mac: option + shift + down arrow

    const isPropsEqual = Object.keys(nextProps).every(
      (key) => nextProps[key] === this.props[key]
    );

    // to select multiple pieces of code
    // mac: cmd + d
    // windows: ctrl + d
    const isStateEqual = Object.keys(nextState).every(
      (key) => nextState[key] === this.state[key]
    );

    console.log(
      this.props.car.make,
      "shouldComponentUpdate",
      isPropsEqual && isStateEqual ? "false" : "true"
    );

    console.log(isPropsEqual, isStateEqual);
    if (isPropsEqual && isStateEqual) return false;
    return true;
  }

  render() {
    console.log(`${this.props.car.make} rendered`);
    return (
      <li
        className="car-item"
        style={{
          width: "100px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <CarInfo car={this.props.car} />
        <SellButton car={this.props.car} handleSell={this.props.handleSell} />
      </li>
    );
  }
}
