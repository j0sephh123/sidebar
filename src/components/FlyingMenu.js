import { FlyingMenuWrapperE } from "../elements/FlyingMenuWrapperE";
import ConditionalWrapper from "../hocs/ConditionalWrapper";
import ListItems from "../elements/ListItems";

export default function renderFlyingMenu({ sidebar, dispatch }) {
  if (!sidebar.activeListCoordinates) {
    return null;
  }

  let { top, right } = sidebar.activeListCoordinates;

  console.log(sidebar.activeList);

  return (
    <ConditionalWrapper
      condition={sidebar.toggled}
      wrapper={(children) => (
        <FlyingMenuWrapperE top={top}>{children}</FlyingMenuWrapperE>
      )}
    >
      <ListItems
        dispatch={dispatch}
        listChildren={sidebar.elements[sidebar.activeList - 1].children}
      />
    </ConditionalWrapper>
  );
}
