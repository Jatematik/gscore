import React, { ButtonHTMLAttributes } from "react";
import styled, { css, CSSProp } from "styled-components";

import { Line } from "./Line";

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  containerStyles = {},
  ...props
}): JSX.Element => {
  return (
    <Container {...props}>
      <Line containerStyles={lineStyles} />
      <Line containerStyles={lineStyles} />
      <Line containerStyles={lineStyles} />
    </Container>
  );
};

interface BurgerMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerStyles?: CSSProp;
}

const Container = styled.button<{ $CSS?: CSSProp }>`
  width: 24px;
  height: 24px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  ${({ $CSS }) => $CSS}
`;

const lineStyles = css`
  height: 2px;
  width: 100%;
  background-color: #fff;
  margin: 0;
  border-radius: 2px;
`;
