export const TOGGLE_MAIN_ITEM = "TOGGLE_MAIN_ITEM";
export const TOGGLE_SECOND_LEVEL_ITEM = "TOGGLE_SECOND_LEVEL_ITEM";

export const toggle = () => async (dispatch, getState) => {
  return dispatch({
    type: TOGGLE_MAIN_ITEM,
  });
};
