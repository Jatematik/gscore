import React from 'react';
import { colors } from 'src/styles/colors';
import styled, { CSSProp } from 'styled-components';

export const Line: React.FC<LineProps> = ({
  containerStyles = {},
  ...props
}) => {
  return <AppLine $CSS={containerStyles} {...props} />;
};

interface LineProps {
  containerStyles?: CSSProp;
}

const AppLine = styled.div<{ $CSS?: CSSProp }>`
  margin: 40px 0%;
  height: 1px;
  background-color: ${colors.gray500};
  ${({ $CSS }) => $CSS}
`;
