import { useState } from "react";
import Counter from "./components/Counter/Counter";
import TodoList from "./components/Todo/TodoList";
import Timer from "./components/Timer";

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("alice");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    setName(name === "alice" ? "bob" : "alice");
  };
  return (
    // JSX
    <>
      {/* <button onClick={handleNameChange}>change name</button>
      <Counter name={name} /> */}
      {/* <button onClick={() => setShow(!show)}>toggle timer</button>
      {show && <Timer />} */}
      <button onClick={() => setCount(count + 1)}>add count</button>
      {show && <TodoList count={count} />}
    </>
  );
}

export default App;
