import React, { memo } from "react";

// hoc
const TodoItem = memo(({ handleDelete }) => {
  console.log("Todo Item renders");
  return (
    <li>
      {/* <span>{todo.content}</span>
      <button onClick={() => handleDelete(todo.id)}>Delete</button> */}
    </li>
  );
});

export default TodoItem;
