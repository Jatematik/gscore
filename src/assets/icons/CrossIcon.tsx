import React, { HTMLAttributes } from "react";
import { colors } from "src/styles/colors";
import styled, { CSSProp } from "styled-components";

const CrossIcon: React.FC<CrossIconProps> = ({
  containerStyles = {},
  ...props
}): JSX.Element => {
  return (
    <Flex $CSS={containerStyles} {...props}>
      <Cross />
    </Flex>
  );
};

interface CrossIconProps extends HTMLAttributes<HTMLDivElement> {
  containerStyles?: CSSProp;
}

export default CrossIcon;

const Flex = styled.div<{ $CSS?: CSSProp }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $CSS }) => $CSS}
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
