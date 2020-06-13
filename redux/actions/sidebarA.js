//Action Types
export const TOGGLE = "TOGGLE";

//Action Creator
export const toggle = () => async (dispatch, getState) => {
 
   return dispatch({
     type: TOGGLE,
   });
 };
