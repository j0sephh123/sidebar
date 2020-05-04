import { Fragment } from 'react'
import MainList from './MainList'
import ListItems from './ListItems'

function SidebarComponent({ renderChildren, state, setState, structure, toggle }) {

  return (
    <div className={`sidebar ${state.toggled ? "toggled" : ""}`}>
      <ul className="list-group">
        <li className="list-group-item">
          <i 
            onClick={toggle} 
            className={`fas fa-2x c-hand ${state.toggled ? "fa-bars" : "fa-ellipsis-h"}`}></i>
        </li>
        {structure.map(item => {

          let active = item.id === state.activeList;

          return (
            <Fragment key={item.id}>
              <MainList
                state={state}
                toggled={state.toggled}
                setState={setState} 
                active={active} 
                item={item} />
                  <ul className="list-group">
                    {(active && !state.toggled) && <ListItems 
                      listChildren={item.children}
                      state={state}
                      setState={setState}
                    />
                    
                    }
                  </ul>
            </Fragment>
            )
          })}
      </ul>
    </div>
  );
}

export default SidebarComponent;