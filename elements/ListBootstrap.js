function ListBootstrap({ children, toggleSecondLevelItem, active, setState, state }) {

  const callback = el => {
    // active element - so one of three
    // callback renders twice first is null, second is the el, so we check for that
    // if already set, prevent endless loop

    if(active && el && !state.activeListCoordinates) {
      setState(prevState => ({
        ...prevState,
        activeListCoordinates: el.getBoundingClientRect(),
      }))
    }
  }

  return (
    <li
      ref={callback}
      onClick={toggleSecondLevelItem}
      className={`${active ? "active" : null} c-hand list-group-item d-flex justify-content-between align-items-center`}
    >{children}</li>
  )
}

export default ListBootstrap