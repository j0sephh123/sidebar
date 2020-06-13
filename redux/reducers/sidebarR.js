import { initialState } from "../state";
import { TOGGLE } from "../actions/sidebarA"

const sidebarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE: {
      console.log(TOGGLE, 'action');
      return {
        ...state,
        toggled: !state.toggled,
      }
    }
    default: {
      return { 
        ...state,
      };
    }
  }
};

export default sidebarReducer;