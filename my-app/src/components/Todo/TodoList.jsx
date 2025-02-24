import React, { useEffect, useState, useRef, useCallback } from "react";
import TodoItem from "./TodoItem";

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

const TodoList = ({ count }) => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // useCallback;
  const handleAdd = useCallback(() => {
    console.log("handle add function");
    setTodos([...todos, { id: todos.length, content: inputRef.current.value }]);
    inputRef.current.value = "";
  }, [setTodos]);

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

export default TodoList;
