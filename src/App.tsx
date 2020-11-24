import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import styles from './App.module.css';
import { selectTodos, addATodo } from './features/todoSlice';
import Todo from './Todo';

function App() {
  const [input, setInput] = useState<string>('')
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null) 

  useEffect(() => {
    // When the app component loads...
    if (inputRef.current !== null) {
      inputRef.current.focus()
    }
  }, [])

  const addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!input) return;

    dispatch(addATodo({
      title: input
    }))

    setInput('')
  }

  return (
    <div className="app">
      <h2>This is a todo app</h2>

      {todos.map((todo) => (
        <Todo title={todo.title} isDone={todo.isDone} />
      ))}

      <form>
        <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} />
        <button type='submit' onClick={addTodo}>Add todo</button>
      </form>
      
    </div>
  );
}

export default App;
