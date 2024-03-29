import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: "gzUWpCL1B69sOQD7", task: " first task" }],
    deletedTodos:[],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const deleteTodo = state.todos.filter((todo) => todo.id !== action.payload);
      const deletedTodo = state.todos.filter((todo) => todo.id === action.payload);
      state.todos = deleteTodo;
      state.deletedTodos = [...state.deletedTodos, ...deletedTodo];
    },
    updateTodo: (state, action) => {
      const { id, updateTask } = action.payload;
      const updateTod = state.todos.find((todo) => todo.id === id);
      updateTod && (updateTod.task = updateTask);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
