import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

const App = () => {
  let todos = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fugiat non in ipsa dolorum quae, ea consequuntur error ducimus nesciunt fuga temporibus, perspiciatis atque, amet sit repudiandae sapiente rem vitae.",
    "drink Milk",
    "rest",
    "blessed",
    "moses",
    "Gift",
    "Hello Mr Man",
  ];
  return (
    <div className="app">
      <h1>React Todo List</h1>
      <Todoinput />
      <h6>`You cannot submit empty item`</h6>
      <h4>You have {0} items on the List</h4>
      <TodoList todos={todos} />
      <p>@Pharmakarios</p>
    </div>
  );
};

export default App;
