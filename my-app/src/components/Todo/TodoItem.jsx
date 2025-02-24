import React from "react";

const TodoItem = React.memo(({ handleDelete }) => {
  console.log("Todo Item renders");
  return (
    <li>
      {/* <span>{todo.content}</span>
      <button onClick={() => handleDelete(todo.id)}>Delete</button> */}
    </li>
  );
});

export default TodoItem;
