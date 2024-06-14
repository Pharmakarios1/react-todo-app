import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ol className="ol">
      {todos.map((todo, index) => {
        return (
          <TodoCard key={index} {...props} index={index}>
            {todo}
          </TodoCard>
        );
      })}
    </ol>
  );
};

export default TodoList;
