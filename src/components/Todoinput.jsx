const Todoinput = ({
  handleAddTodos,
  todoValue,
  setTodoValue,
  count,
  setCount,
}) => {
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
            setCount(count + 1);
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
