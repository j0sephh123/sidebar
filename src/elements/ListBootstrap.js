import { toggleSecondLevelItem } from "../redux/actions/sidebarA";
import { setActiveListCoordinates } from "../redux/actions/sidebarA"

function ListBootstrap({ children, active, dispatch, element, activeListCoordinates }) {

  const callback = el => {
    // active element - so one of three
    // callback renders twice first is null, second is the el, so we check for that
    // if already set, prevent endless loop
    // obviously need to do it in a better way 

    if(active && el && !activeListCoordinates) {
      dispatch(setActiveListCoordinates({ boundingRect: el.getBoundingClientRect() }))
    }
  }

  return (
    <li
      ref={callback}
      onClick={() => dispatch(toggleSecondLevelItem({ element }))}
      className={`${active ? "active" : null} c-hand list-group-item d-flex justify-content-between align-items-center`}
    >{children}</li>
  )
}

export default ListBootstrap