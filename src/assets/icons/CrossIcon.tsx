import React from "react";
import { colors } from "src/styles/colors";
import styled from "styled-components";

const CrossIcon: React.FC = (): JSX.Element => {
  return (
    <Circle>
      <Cross />
    </Circle>
  );
};

export default CrossIcon;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: ${colors.black700};
`;

const Cross = styled.div`
  position: relative;
  width: 24px;
  height: 2px;
  transform: rotate(45deg);
  background-color: ${colors.white};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 24px;
    height: 2px;
    background-color: ${colors.white};
    transform: rotate(90deg);
  }
`;
