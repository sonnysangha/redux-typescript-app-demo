import React from 'react'
import { Todo as TodoProp } from './features/todoSlice';
import styles from './Todo.module.css';

function Todo(todo: TodoProp) {
    return (
        <div className={styles.todo}>
            <p className="todo__title">{todo.title}</p>
            {todo.isDone && (
                <h2>YOU DONE IT</h2>
            )}
        </div>
    )
}

export default Todo
