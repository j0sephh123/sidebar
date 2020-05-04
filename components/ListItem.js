function ListItem({ listItem, setState, state }) {

  const changeSlug = () => {
    setState(prevState => {
      return ({
        ...prevState,
        slug: listItem.slug,
      })
    })
  }

  let current = state.slug === listItem.slug;

  return (
    <li onClick={changeSlug} className={`ml-3 list-group-item ${current ? "active-path" : ""}`}>
      <div className={`sidebar_child_container c-hand`}>
        <span style={{paddingRight: 10}} className="fa fa-chevron-right"></span>
        <a>{listItem.name}</a>
      </div>
    </li>
  )
}

export default ListItem;