import React, { ReactNode } from "react";
import styled, { CSSProp } from "styled-components";

const Container: React.FC<ContainerProps> = ({
  containerStyles = {},
  children,
}) => {
  return <MainContainer $CSS={containerStyles}>{children}</MainContainer>;
};

interface ContainerProps {
  children: ReactNode;
  containerStyles?: CSSProp;
}

const MainContainer = styled.div<{ $CSS?: CSSProp }>`
  margin: auto;
  max-width: 1266px;

  ${({ $CSS }) => $CSS}
`;

export default Container;
