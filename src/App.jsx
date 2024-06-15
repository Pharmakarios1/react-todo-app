import { useEffect, useState } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Designer from "./components/Designer";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [count, setCount] = useState(0);

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
    <>
      <div className="app">
        <Header />
        <Hero count={count} />
        <Todoinput
          handleAddTodos={handleAddTodos}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          count={count}
          setCount={setCount}
        />

        <h6>`You cannot submit empty item`</h6>

        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          count={count}
          setCount={setCount}
        />
        <Designer />
      </div>
      <Menu />
    </>
  );
};

export default App;
