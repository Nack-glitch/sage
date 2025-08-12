
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Read a book', completed: false },
  { id: 2, title: 'Go to school', completed: true }
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const lastId = state.length ? state[state.length - 1].id : 0;
      state.push({ id: lastId + 1, title: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;