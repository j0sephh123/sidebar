import SidebarComponent from '../components/SidebarComponent'
import { useState, Fragment, useRef } from 'react'
import { findDOMNode } from 'react-dom'
import ListItems from '../components/ListItems';
import ConditionalWrapper from '../components/ConditionalWrapper';


// data stuff

const structure = [
  {id: 1, name: "File", icon: "fa fa-address-book fa-lg", children: [
    {id: 1.1, name: "Create", slug: "/app/create-form"},
  ]},
  {id: 2, name: "Categories", icon: "far fa-comment-dots fa-lg", children: [
    {id: 2.1, name: "Food", slug: "/app/list/food"},
    {id: 2.2, name: "Water", slug: "/app/list/water"},
    {id: 2.3, name: "Medicine", slug: "/app/list/medicine"},
    {id: 2.4, name: "Weapon", slug: "/app/list/weapon"},
  ]},
  {id: 3, name: "About", icon: "fa fa-indent fa-lg", children: [
    {id: 3.1, name: "About", slug: "/about"}
  ]},
];

const data = {
  slug: "/",
  toggled: false,
  activeList: null,
  activeListCoordinates: null,
}

function Sidebar() {
  const [state, setState] = useState(data);

  const toggle = () => {
    setState(prevState => ({
      ...prevState,
      toggled: !prevState.toggled,
    }))
  }

  const renderSecondMenu = () => {

    if(state.activeListCoordinates) {
      let { top, right } = state.activeListCoordinates;
      console.log({toggled: state.toggled});

      return (
        <ConditionalWrapper
          condition={state.toggled}
          wrapper={children => <div className="wrapper" style={{
            position: "absolute",
            top,
            left: 60,
          }}>{children}</div>}
        >
          <ListItems 
            state={state}
            setState={setState}
            listChildren={structure[state.activeList - 1].children}
          /> 
        </ConditionalWrapper>
      )
    }
    
    return null;
  }

  console.log('sidebar');

  return (
    <div>
      <h3>Slug: {state.slug}</h3>
      <div style={{display: "flex"}}>
        <SidebarComponent
          toggle={toggle}
          structure={structure}
          state={state} 
          setState={setState} />  
          
          {(state.activeList && state.toggled) && renderSecondMenu()}
      </div>
    </div>
  )
}

export default Sidebar;