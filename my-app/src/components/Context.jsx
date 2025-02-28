import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Context = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      Context
      <div>{count}</div>
      <button onClick={() => setCount(5)}>set count to 5</button>
    </div>
  );
};

export default Context;
