import { applyMiddleware, combineReducers, createStore } from "redux";
import inventoryReducer from "./reducers/inventoryReducers";
import { thunk } from "redux-thunk";
import roleReducer from "./reducers/roleReducers";

const rootReducer = combineReducers({
    inventory: inventoryReducer,
    role: roleReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));