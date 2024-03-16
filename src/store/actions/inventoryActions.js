import { FETCH_INVENTORY_FAILURE, FETCH_INVENTORY_REQUEST, FETCH_INVENTORY_SUCCESS } from "./actionsContanst";

export const fetchInventoryRequest = () => ({
    type: FETCH_INVENTORY_REQUEST,
  });
  
  export const fetchInventorySuccess = (inventory) => ({
    type: FETCH_INVENTORY_SUCCESS,
    payload: inventory,
  });
  
  export const fetchInventoryFailure = (error) => ({
    type: FETCH_INVENTORY_FAILURE,
    payload: error,
  });