import TodoCard from "./TodoCard";

const TodoList = ({ todos }) => {
  return (
    <ol className="ol">
      {todos.map((item, index) => {
        return <TodoCard key={index}>{item}</TodoCard>;
      })}
    </ol>
  );
};

export default TodoList;
