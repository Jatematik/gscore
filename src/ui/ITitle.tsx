import React, { ReactNode } from 'react';
import styled, { CSSProp } from 'styled-components';

export const ITitle: React.FC<ITitleProps> = ({
  children,
  as = 'h1',
  containerStyles = {},
  ...props
}) => {
  return (
    <Title as={as} {...props} $CSS={containerStyles}>
      {children}
    </Title>
  );
};

interface ITitleProps {
  children: ReactNode;
  containerStyles?: CSSProp;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title = styled.h1<{ $CSS?: CSSProp }>`
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  text-align: center;
  ${({ $CSS }) => $CSS}
`;
