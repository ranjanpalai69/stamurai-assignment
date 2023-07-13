import { legacy_createStore } from "redux";
import { todoReducer } from "./reducers/task.reducers";


const store = legacy_createStore(todoReducer);

export default store;