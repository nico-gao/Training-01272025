import React from "react";
import { v4 as uuidv4 } from "uuid";
import Car from "./Car";
import { CounterContext } from "../../context/CounterContext";

const mockCarData = [
  {
    make: "Toyota",
    quantity: 10,
    id: uuidv4(),
  },
  {
    make: "Honda",
    quantity: 7,
    id: uuidv4(),
  },
  {
    make: "Nissan",
    quantity: 5,
    id: uuidv4(),
  },
];

console.log(mockCarData);

export default class CarApp extends React.Component {
  state = {
    cars: [...mockCarData],
  };

  handleSell = (index) => {
    this.setState((prev) => {
      // const nextState = { ...prev };
      // nextState.cars[index].quantity--; // mutable

      const nextCars = prev.cars.map((car, carIndex) => {
        if (index === carIndex) {
          return {
            ...car,
            quantity: car.quantity - 1, // immutable
          };
        } else return car;
      });

      const nextState = { ...prev, cars: nextCars };
      return nextState;
    });
  };

  render() {
    console.log("car app rendered");
    const totalQuantity = this.state.cars.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    return (
      <>
        {/* <CounterContext.Consumer>
          {({ count }) => <div>Car App Counter: {count}</div>}
        </CounterContext.Consumer> */}
        <ul
          className="car-app"
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <li key="total">Total quantity: {totalQuantity}</li>
          {this.state.cars.map((car, index) => (
            <Car
              key={car.id}
              car={car}
              handleSell={() => this.handleSell(index)}
            />
          ))}
        </ul>
      </>
    );
  }
}

// class component vs functional component
// lifecycle
// shouldComponentUpdate, PureComponent, React.memo, useMemo, useCallback

// carapp -> car -> carinfo
//               -> sell button

// props drilling
// to pass props to the destination (child component), you have to pass it through all the descendent component between the parent and the child

// state lifting
// to share state between components on the same level, you have to manage the state in their common parent component

// context, gobal state management
