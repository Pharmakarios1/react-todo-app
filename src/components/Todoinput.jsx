import { useState } from "react";

const Todoinput = ({ handleAddTodos, todoValue, setTodoValue }) => {
  // const [todoValue, setTodoValue] = useState("");

  return (
    <>
      <div className="input-section">
        <input
          type="text"
          className="search"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue("");
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Todoinput;
