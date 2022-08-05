import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const InputTodo = () => {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("localTodo")){
            const storedTodos = JSON.parse(localStorage.getItem("localTodo"));
            setTodos(storedTodos);
        }
    },[]);

    const inputChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(todos);
        setValue("");
    };

    const addTodo = () => {
        const newTodo = {text:value, id:new Date().getTime().toString()};
        setTodos([...todos,newTodo]);
        localStorage.setItem("localTodo", JSON.stringify([...todos, newTodo]));
    };

    const deleteTodo = (todo) => {
        const updated = todos.filter(t => t.id !== todo.id);
        setTodos(updated);
        localStorage.setItem("localTodo", JSON.stringify(updated));
    };

    return(
    <>
    <div className='form-data'>
    <form onSubmit={formSubmitHandler}>
        <input className='input-data'
        type="text" 
        placeholder="Write your todo." 
        value={value} 
        onChange={inputChangeHandler} 
        />
        <button className="btn" type="submit" onClick={addTodo}>
            Add
        </button>
    </form>
    </div>
    <div>
            You have
            {
                !todos.length ? " no todos" : todos.length===1 ? "1 todo" : todos.length > 1 ? ` ${todos.length} todos` : null
            }
    </div>
    <span>
        {todos.map(todo => <Todo key={todo.id} text={todo.text} deleteTodo={deleteTodo} todo={todo}/>)}; 
    </span>
    </>
    );
};

export default InputTodo;