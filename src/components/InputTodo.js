import React, {useState} from 'react';
import Todo from './Todo';

const InputTodo = () => {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    const inputChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(todos);
        setValue("");
    };

    const addTodo = () => {
        const newTodo = {text:value};
        setTodos([...todos,newTodo]);
    };

    return(
    <>
    <form onSubmit={formSubmitHandler}>
        <input 
        type="text" 
        placeholder="Write your todo." 
        value={value} 
        onChange={inputChangeHandler} 
        />
        <button type="submit" onClick={addTodo}>
            Add
        </button>
    </form>
    <span>
        {todos.map(todo => <Todo text={todo.text}/>)}; 
    </span>
    </>
    );
};

export default InputTodo;