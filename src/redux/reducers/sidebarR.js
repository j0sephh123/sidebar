import { initialState } from "../state";
import { TOGGLE_MAIN_ITEM } from "../actions/sidebarA";

const sidebarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MAIN_ITEM: {
      return {
        ...state,
        toggled: !state.toggled,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default sidebarReducer;
