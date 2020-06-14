import ListBootstrap from '../elements/ListBootstrap';

function MainList({ element, active, dispatch, sidebar }) {

  return (
    <ListBootstrap 
      activeListCoordinates={sidebar.activeListCoordinates}
      element={element}
      active={active} 
      dispatch={dispatch}
      >
      <div className="d-flex justify-content-between">
        <span className={`${!sidebar.toggled ? "pr-3" : null}`}>
          <i className={element.icon}></i>
        </span>
        {!sidebar.toggled && <span className="font-weight-bold">{element.name}</span>}
      </div>
      <div className="arrow">
        {!sidebar.toggled && <span className={`fa fa-chevron-right ${active ? "rotate" : ""}`}></span>}
      </div>
    </ListBootstrap>
  )
}

export default MainList;
