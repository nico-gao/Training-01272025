import { useState } from "react";
import Counter from "./components/Counter/Counter";
import TodoList from "./components/Todo/TodoList";
import Timer from "./components/Timer";
import ClassComponent from "./components/ClassComponents/ClassComponent";
import CarApp from "./components/CarApp/CarApp";

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("alice");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    setName(name === "alice" ? "bob" : "alice");
  };
  return (
    // JSX
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
      {/* <button onClick={handleNameChange}>change name</button>
      <Counter name={name} /> */}
      {/* <button onClick={() => setShow(!show)}>toggle timer</button>
      {show && <Timer />} */}
      {/* <button onClick={() => setCount(count + 1)}>add count</button>
      {show && <TodoList count={count} />} */}

      {/* <button onClick={() => setShow(!show)}>toggle class component</button>
      {show && <ClassComponent />} */}

      <CarApp />
    </div>
  );
}

export default App;
