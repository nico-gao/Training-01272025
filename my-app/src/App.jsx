import { useState } from "react";
import Counter from "./components/Counter/Counter";
import TodoList from "./components/Todo/TodoList";
import Timer from "./components/Timer";
import ClassComponent from "./components/ClassComponents/ClassComponent";
import CarApp from "./components/CarApp/CarApp";
import Context from "./components/Context";
import CounterProvider from "./context/CounterContext";
import ReducerCounter from "./components/Counter/ReducerCounter";

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("alice");
  // const [count, setCount] = useState(0);
  const handleNameChange = () => {
    setName(name === "alice" ? "bob" : "alice");
  };
  return (
    // JSX, createElement()
    <div
      className="app"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {babel}
      {createElement("h1", { className: "greeting" }, "Hello")}
      <h1 className="greeting">Hello</h1>

      {/* <button onClick={handleNameChange}>change name</button> */}
      {/* <CounterProvider> */}
      <Counter name={name} />
      {/* </CounterProvider> */}
      {/* <button onClick={() => setShow(!show)}>toggle timer</button>
      {show && <Timer />} */}
      {/* <button onClick={() => setCount(count + 1)}>add count</button> */}
      {/* {show && <TodoList />} */}

      {/* <button onClick={() => setShow(!show)}>toggle class component</button> */}
      {/* {show && <ClassComponent a={1} />} */}
      {/* => NewComponent */}

      {/* <Context /> */}
      {/* <CarApp /> */}
      {/* <ReducerCounter /> */}
    </div>
  );
}

export default App;
