import React from "react";
import ColorContext from "../color";
import styled from "styled-components";

const Dom = styled.div`
  width: 64px;
  height: 64px;
  background: ${(value) => value.color};
`;
const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => <Dom btnColor={value.color} />}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
