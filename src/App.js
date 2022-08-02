import Todo from "./components/Todo";
import InputTodo from "./components/InputTodo";

function App() {
  return <div>
    <h1>My Todos</h1>
    <InputTodo />
    <Todo text='Learn React'/>
    <Todo text='Master React' />
    <Todo text='Explore React More' />
  </div>;
}

export default App;
