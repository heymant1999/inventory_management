import { TOGGLE_ROLE } from "../actions/actionsContanst";

const initialState = {
  isUser: true // Default role user
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ROLE:
      return {
        ...state,
        isUser: !state.isUser
      };
    default:
      return state;
  }
};

export default roleReducer;