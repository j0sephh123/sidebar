import { initialState } from "../state";
import {
  TOGGLE_MENU,
  TOGGLE_SECOND_LEVEL_ITEM,
  SET_ACTIVE_LIST_COORDINATES,
  CHANGE_SLUG,
} from "../actions/sidebarA";

const sidebarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU: {
      return {
        ...state,
        toggled: !state.toggled,
      };
    }
    case TOGGLE_SECOND_LEVEL_ITEM: {
      const { element } = payload;

      return {
        ...state,
        activeList: state.activeList === element.id ? null : element.id,
        activeListCoordinates: null,
      };
    }
    case SET_ACTIVE_LIST_COORDINATES: {
      const { boundingRect } = payload;

      return {
        ...state,
        activeListCoordinates: boundingRect,
      };
    }
    case CHANGE_SLUG: {
      const { slug } = payload;

      return {
        ...state,
        slug,
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
