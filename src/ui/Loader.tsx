import React from 'react';
import LoaderIcon from 'src/assets/icons/LoaderIcon';
import styled, { CSSProp } from 'styled-components';

export const Loader: React.FC<LoaderProps> = ({
  color,
  width = 24,
  height = 24,
  containerStyles = {},
}) => {
  return (
    <LoaderContainer $CSS={containerStyles}>
      <LoaderIcon color={color} width={width} height={height} />
    </LoaderContainer>
  );
};

interface LoaderProps {
  color?: string;
  width?: number;
  height?: number;
  containerStyles?: CSSProp;
}

const LoaderContainer = styled.div<{ $CSS?: CSSProp }>`
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  animation: rotate 0.8s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ $CSS }) => $CSS}
`;
