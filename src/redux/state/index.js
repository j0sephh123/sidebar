import elements from "../../../sidebar.json";

console.log(elements);

export const initialState = {
  elements,
  slug: "/",
  toggled: false,
  activeList: null,
  activeListCoordinates: null,
};
