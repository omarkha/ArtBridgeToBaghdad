import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import TodoReducer from "./reducers/TodoReducer";

const store = createStore(TodoReducer, composeWithDevTools());

export default store;
