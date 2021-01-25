import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../Reducer/MainReducer";

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;