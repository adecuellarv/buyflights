import { createStore } from "redux";
import rootReducer from "./reducers/index";

// Configure store with reducers and create
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;