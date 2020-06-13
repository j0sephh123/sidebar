export const sidebarElements = [
  {
    id: 1,
    name: "Stock",
    icon: "fa fa-address-book fa-lg",
    children: [{ id: 1.1, name: "Create", slug: "/create-form" }],
  },
  {
    id: 2,
    name: "Categories",
    icon: "far fa-comment-dots fa-lg",
    children: [
      { id: 2.1, name: "Food", slug: "/list/food" },
      { id: 2.2, name: "Water", slug: "/list/water" },
      { id: 2.3, name: "Medicine", slug: "/list/medicine" },
      { id: 2.4, name: "Weapon", slug: "/list/weapon" },
    ],
  },
  {
    id: 3,
    name: "About",
    icon: "fa fa-indent fa-lg",
    children: [{ id: 3.1, name: "About", slug: "/about" }],
  },
];

export const initialState = {
  slug: "/",
  toggled: false,
  activeList: null,
  activeListCoordinates: null,
}