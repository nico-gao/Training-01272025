import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return [count, handleAdd];
};

export default useCounter;
