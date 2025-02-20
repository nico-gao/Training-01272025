import { useState } from "react";
import Counter from "./components/Counter/Counter";

function App() {
  const [name, setName] = useState("alice");
  const handleNameChange = () => {
    setName(name === "alice" ? "bob" : "alice");
  };
  return (
    // JSX
    <>
      <button onClick={handleNameChange}>change name</button>
      <Counter name={name} />
    </>
  );
}

export default App;
