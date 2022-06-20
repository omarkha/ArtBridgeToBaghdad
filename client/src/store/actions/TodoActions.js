import { ADD_TODO } from "../types";

export const AddTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
