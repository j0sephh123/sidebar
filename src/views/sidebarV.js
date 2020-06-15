import { useState, Fragment } from "react";
import { connect } from "react-redux";

import Sidebar from "../components/Sidebar";
import { initialState } from "../redux/state";
import FlyingMenu from "../components/FlyingMenu";

import { AppContainerE } from "../elements/AppContainerE";

import sidebarData from "../../sidebar.json"

function SidebarView({ dispatch, sidebar, stars }) {

  return (
    <Fragment>
      <h3>Slug: {sidebar.slug}</h3>
      <AppContainerE>
        <Sidebar
          dispatch={dispatch}
          sidebar={sidebar}
        />

        {sidebar.activeList && sidebar.toggled && (
          <FlyingMenu sidebar={sidebar} dispatch={dispatch} />
        )}
      </AppContainerE>
    </Fragment>
  );
}

export default connect(sidebar => sidebar, null)(SidebarView);