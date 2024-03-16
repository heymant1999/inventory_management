import { FETCH_INVENTORY_FAILURE, FETCH_INVENTORY_REQUEST, FETCH_INVENTORY_SUCCESS } from "../actions/actionsContanst";

// reducers/inventoryReducer.js  
  const initialState = {
    inventory: [],
    loading: false,
    error: null
  };
  
  const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INVENTORY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_INVENTORY_SUCCESS:
        return {
          ...state,
          loading: false,
          inventory: action.payload
        };
      case FETCH_INVENTORY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default inventoryReducer;
  