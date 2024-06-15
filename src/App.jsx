import { useEffect, useState } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  };
  console.log(todos);

  const handleDelete = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(todos);
    setTodos(newTodoList);
  };

  const handleEdit = (index) => {
    setTodoValue(todos[index]);
    handleDelete(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

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

      <p className="border-top">@Pharmakarios</p>
    </div>
  );
};

export default App;
