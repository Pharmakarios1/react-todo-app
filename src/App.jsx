import { useState } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  const handleDelete = (todo, index) => {
    const newTodoList = todo.filter((newIndex) => {
      if (newIndex !== index) setTodos(newTodoList);
    });
  };

  return (
    <div className="app">
      <h1>React Todo List</h1>

      <Todoinput handleAddTodos={handleAddTodos} />

      <h6>`You cannot submit empty item`</h6>
      <h4>You have {0} item(s) on the List</h4>

      <TodoList todos={todos} handleDelete={handleDelete} />

      <p>@Pharmakarios</p>
    </div>
  );
};

export default App;
