import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import TodoItem from "./TodoItem";
import { CounterContext } from "../../context/CounterContext";
import withCounter from "../../hoc/withCounter";

const mockTodoData = [
  {
    id: "0",
    content: "12312123",
  },
  {
    id: "1",
    content: "123",
  },
  {
    id: "2",
    content: "345",
  },
];

const TodoList = ({ count, handleAdd }) => {
  console.log(count);
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const { setCount } = useContext(CounterContext);

  // useCallback;
  // const handleAdd = useCallback(() => {
  //   console.log("handle add function");
  //   setTodos([...todos, { id: todos.length, content: inputRef.current.value }]);
  //   inputRef.current.value = "";
  // }, [setTodos]);

  // const handleAdd = () => {
  //   setTodos([...todos, { id: todos.length, content: inputRef.current.value }]);
  //   inputRef.current.value = "";
  // };

  console.log("TodoList renders");

  const handleDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [setTodos]
  );

  const deleteFnRef = useRef(handleDelete);
  console.log("delete function", handleDelete === deleteFnRef.current);

  useEffect(() => {
    setTodos(mockTodoData);
  }, []);

  return (
    <div>
      Count: {count}
      <button onClick={() => handleAdd()}>add one</button>
      <div>
        <input ref={inputRef} />
        <button onClick={handleAdd}>Add todo</button>
      </div>
      <ul>
        {todos
          // .filter((todo) => todo.content.includes(filter))
          .map((todo) => (
            <TodoItem handleDelete={handleDelete} key={todo.id} />
          ))}
      </ul>
    </div>
  );
};

export default withCounter(TodoList);
