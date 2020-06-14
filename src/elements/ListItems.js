import ListItem from "../components/ListItem";

function ListItems({ listChildren, dispatch }) {
  return listChildren.map((listItem) => {
    return (
      <ListItem
        dispatch={dispatch}
        key={listItem.id}
        listItem={listItem}
      />
    );
  });
}

export default ListItems;
