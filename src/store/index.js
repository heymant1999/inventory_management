import { applyMiddleware, combineReducers, createStore } from "redux";
import inventoryReducer from "./reducers/inventoryReducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    inventory: inventoryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));