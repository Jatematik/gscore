import * as React from 'react';
import styled, { CSSProp } from 'styled-components';

const RejectIcon = ({ containerStyles = {} }: RejectIconProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    $CSS={containerStyles}
  >
    <path
      d="M3 21 21 3M21 21 3 3"
      stroke="#FF5A65"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface RejectIconProps {
  containerStyles?: CSSProp;
}

export default RejectIcon;

const Svg = styled.svg<{ $CSS?: CSSProp }>`
  ${({ $CSS }) => $CSS}
`;
