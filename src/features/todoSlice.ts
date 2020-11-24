import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface Todo {
    title: string;
    isDone?: boolean;
}

interface TodoState {
  todos: Array<Todo>;
}

const initialState: TodoState = {
  todos: [
    {
      title: 'take the dogs out'
    },
    {
      title: 'take the trash out',
      isDone: true
    }
  ]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addATodo: (state, action: PayloadAction<Todo>) => {
        state.todos = [...state.todos, action.payload]; 
    },
  },
});

export const { addATodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
