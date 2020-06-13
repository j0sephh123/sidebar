import { Fragment } from "react";
import MainList from "./MainList";
import ListItems from "../elements/ListItems";
import { toggle } from "../redux/actions/sidebarA"

function SidebarComponent({
  dispatch,
  state,
  setState,
  sidebarElements,
}) {
  return (
    <div className={`sidebar ${state.toggled ? "toggled" : ""}`}>
      <ul className="list-group">
        <li className="list-group-item">
          <i
            onClick={() => dispatch(toggle())}
            className={`fas fa-2x c-hand ${
              state.toggled ? "fa-bars" : "fa-ellipsis-h"
            }`}
          ></i>
        </li>
        {sidebarElements.map((item) => {
          const active = item.id === state.activeList;

          return (
            <Fragment key={item.id}>
              <MainList
                state={state}
                toggled={state.toggled}
                setState={setState}
                active={active}
                item={item}
              />
              <ul className="list-group">
                {active && !state.toggled && (
                  <ListItems
                    listChildren={item.children}
                    state={state}
                    setState={setState}
                  />
                )}
              </ul>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarComponent;