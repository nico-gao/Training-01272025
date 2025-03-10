import { useEffect, useState } from "react";
import useCounter from "../../hooks/useCounter";
import useLogger from "../../hooks/useLogger";

// what triggers component update
// state change
// props change

export default function Counter(props) {
  // useState: initial value as argument, returns two elements in an array
  // state is immutable, use set state function to update
  // const [count, setCount] = useState(0);
  const [count, handleAdd] = useCounter();
  const [count2, setCount2] = useState(0);

  useLogger(count2);
  useLogger(count);

  console.log(props.name);

  const handleClick = () => {
    handleAdd();
    // setCount(count + 1); // async, batch update -> 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount((prev) => {
    //   // react makes sure the previous value you receive in the callback function is the most updated one
    //   return prev + 1;
    // });
    // setCount((prev) => { // prev -> 1
    //   return prev + 1;
    // });
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  // useEffect
  // no dependecy array: triggered during mounting and updating
  // empty dependency array: only during mounting
  // non-empty array: triggered during mounting and when any of the variables in the array changes
  useEffect(() => {
    console.log("useEffect");
    console.log("count2", count2);
  }, []);

  // mounting: useEffect will run
  // set state in useEffect
  // trigger component update
  // useEffect is listening on the state that was changes
  // trigger another set state -> component update

  return (
    <div>
      <h3>Counter</h3>
      <h3>{count}</h3>
      <button onClick={handleClick}>add count</button>
      <h3>Counter2</h3>
      <h3>{count2}</h3>
      <button onClick={handleClick2}>add count2</button>
    </div>
  );
}
