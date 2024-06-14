import { useState } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };
  console.log(todos);
  const handleDelete = (index) => {
    setTodos(
      todos.filter((todo, todoIndex) => {
        return todoIndex !== index;
      })
    );
  };

  const handleEdit = (index) => {
    setTodoValue(todos[index]);
    handleDelete(index);
  };

  return (
    <div className="app">
      <h1>React Todo List</h1>

      <Todoinput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />

      <h6>`You cannot submit empty item`</h6>
      <h4>You have {0} item(s) on the List</h4>

      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      <p>@Pharmakarios</p>
    </div>
  );
};

export default App;
