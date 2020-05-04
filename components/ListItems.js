import ListItem from "../components/ListItem";

function ListItems({ listChildren, state, setState }) {
  return listChildren.map((listItem) => {
    return (
      <ListItem
        state={state}
        setState={setState}
        key={listItem.id}
        listItem={listItem}
      />
    );
  });
}

export default ListItems;
