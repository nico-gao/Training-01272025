import React, { useReducer } from "react";

//reducer: pure function
const counterReducer = (state, action) => {
  console.log("in counter reducer");
  console.log(action);
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "ADD2":
      return {
        ...state,
        count2: state.count2 + action.payload,
      };
  }
};

const ReducerCounter = () => {
  console.log("reducer counter rendered");
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    count2: 10,
  });
  return (
    <div>
      ReducerCounter
      <div>Reducer Count: {state.count}</div>
      <div>Reducer Count2: {state.count2}</div>
      {/* action object */}
      <button
        onClick={() => {
          dispatch({ type: "ADD", payload: 2 });
        }}
      >
        add to count
      </button>
      <button
        onClick={() => {
          dispatch({ type: "ADD2", payload: 5 });
        }}
      >
        add to count2
      </button>
    </div>
  );
};

export default ReducerCounter;
