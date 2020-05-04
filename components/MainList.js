import ListBootstrap from '../elements/ListBootstrap'

function MainList({ item, setState, active, toggled, state }) {

  const toggle = () => {
    setState(state => {
      console.log('toggle');
      return ({
        ...state, 
        activeList: state.activeList === item.id ? null : item.id,
        activeListCoordinates: null,
      })
    });
  }


  return (
    <ListBootstrap state={state} active={active} onClick={toggle} setState={setState}>
      <div className="d-flex justify-content-between">
        <span className={`${!toggled ? "pr-3" : null}`}>
          <i className={item.icon}></i>
        </span>
        {!toggled && <span className="font-weight-bold">{item.name}</span>}
      </div>
      <div className="arrow">
        {!toggled && <span className={`fa fa-chevron-right ${active ? "rotate" : ""}`}></span>}
      </div>
    </ListBootstrap>
  )
}

export default MainList;
