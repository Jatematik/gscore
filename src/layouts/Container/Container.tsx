import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

interface ContainerProps {
  children: ReactNode;
}

const MainContainer = styled.div`
  margin: auto;
  max-width: 1266px;
`;

export default Container;
