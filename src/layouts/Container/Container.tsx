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

  @media (max-width: 1300px) {
    max-width: 960px;
  }

  @media (max-width: 992px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    padding: 10px 16px;
  }

  ${({ $CSS }) => $CSS};
`;

export default Container;
