import { changeSlug } from "../redux/actions/sidebarA";
import { connect } from "react-redux";

function ListItem({ listItem, sidebar, dispatch }) {
  const current = sidebar.slug === listItem.slug;

  return (
    <li
      onClick={() => dispatch(changeSlug({ slug: listItem.slug }))}
      className={`ml-3 list-group-item ${current ? "active-path" : ""}`}
    >
      <div className={`sidebar_child_container c-hand`}>
        <span
          style={{ paddingRight: 10 }}
          className="fa fa-chevron-right"
        ></span>
        <a>{listItem.name}</a>
      </div>
    </li>
  );
}

export default connect(sidebar => sidebar, null)(ListItem);
