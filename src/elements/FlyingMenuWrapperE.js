import styled from "styled-components";

export const FlyingMenuWrapperE = styled.div({
  position: "absolute",
  top: ({ top }) => top + "px",
  left: 60,
})