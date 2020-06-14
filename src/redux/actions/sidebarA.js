export const TOGGLE_MENU = "TOGGLE_MENU";
export const TOGGLE_SECOND_LEVEL_ITEM = "TOGGLE_SECOND_LEVEL_ITEM";
export const SET_ACTIVE_LIST_COORDINATES = "SET_ACTIVE_LIST_COORDINATES";
export const CHANGE_SLUG = "CHANGE_SLUG";

export const toggleMenu = () => async (dispatch, getState) => {
  return dispatch({
    type: TOGGLE_MENU,
  });
};

export const toggleSecondLevelItem = ({ element }) => async (
  dispatch,
  getState
) => {
  return dispatch({
    type: TOGGLE_SECOND_LEVEL_ITEM,
    payload: {
      element,
    },
  });
};

export const setActiveListCoordinates = ({ boundingRect }) => async (
  dispatch,
  getState
) => {
  return dispatch({
    type: SET_ACTIVE_LIST_COORDINATES,
    payload: {
      boundingRect,
    },
  });
};

export const changeSlug = ({ slug }) => async (dispatch, getState) => {
  return dispatch({
    type: CHANGE_SLUG,
    payload: {
      slug,
    },
  });
};
