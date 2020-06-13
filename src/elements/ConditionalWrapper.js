import styled from "styled-components";

export const WrapperEl = props => styled.div({
  position: "absolute",
  top: props.top,
  left: 60,
});

const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;

export default ConditionalWrapper