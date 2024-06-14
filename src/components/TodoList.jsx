import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <ol className="ol">
      {todos.map((item, index) => {
        return (
          <TodoCard key={index} handleDelete={handleDelete}>
            {item}
          </TodoCard>
        );
      })}
    </ol>
  );
};

export default TodoList;
