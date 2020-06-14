import { Fragment } from "react";
import MainList from "./MainList";
import ListItems from "../elements/ListItems";
import { toggleMenu } from "../redux/actions/sidebarA";

function SidebarComponent({ dispatch, sidebar }) {
  return (
    <div className={`sidebar ${sidebar.toggled ? "toggled" : ""}`}>
      <ul className="list-group">
        <li className="list-group-item">
          <i
            onClick={() => dispatch(toggleMenu())}
            className={`fas fa-2x c-hand ${
              sidebar.toggled ? "fa-bars" : "fa-ellipsis-h"
            }`}
          ></i>
        </li>
        {sidebar.elements.map(element => {
          const active = element.id === sidebar.activeList;

          return (
            <Fragment key={element.id}>
              <MainList
                dispatch={dispatch}
                sidebar={sidebar}
                active={active}
                element={element}
              />
              <ul className="list-group">
                {active && !sidebar.toggled && (
                  <ListItems
                    listChildren={element.children}
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
