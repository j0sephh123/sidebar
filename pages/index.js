import SidebarComponent from "../components/SidebarComponent";
import { useState, Fragment, useRef } from "react";
import ListItems from "../elements/ListItems";
import ConditionalWrapper from "../elements/ConditionalWrapper";
import { sidebarElements } from "../redux/state";;
import { initialState } from "../redux/state";
import { connect } from 'react-redux';

import styled from "styled-components";

const AppContainerE = styled.div({
  display: "flex",
});

function Sidebar({ dispatch, sidebar }) {

  const [state, setState] = useState(initialState);

  const renderSecondMenu = () => {
    if (!state.activeListCoordinates) {
      return null;
    }

    let { top, right } = state.activeListCoordinates;
    console.log({ toggled: state.toggled });

    return (
      <ConditionalWrapper
        condition={state.toggled}
        wrapper={(children) => (
          <div
            className="wrapper"
            style={{
              position: "absolute",
              top,
              left: 60,
            }}
          >
            {children}
          </div>
        )}
      >
        <ListItems
          state={state}
          setState={setState}
          listChildren={sidebarElements[state.activeList - 1].children}
        />
      </ConditionalWrapper>
    );
  };

  return (
    <Fragment>
      <h3>Slug: {sidebar.slug}</h3>
      <AppContainerE>
        <SidebarComponent
          dispatch={dispatch}
          sidebarElements={sidebarElements}
          state={sidebar}
          setState={setState}
        />

        {state.activeList && state.toggled && renderSecondMenu()}
        
      </AppContainerE>
    </Fragment>
  );
}

const mapState = state => state;

export default connect(mapState, null)(Sidebar);