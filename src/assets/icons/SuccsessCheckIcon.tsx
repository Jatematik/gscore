import * as React from 'react';
import { SVGProps } from 'react';
import styled, { CSSProp } from 'styled-components';

const SuccsessCheckIcon = ({
  containerStyles = {},
}: SuccsessCheckIconProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    $CSS={containerStyles}
  >
    <path
      d="m2.16 13.406 5.623 5.623L21.84 4.97"
      stroke="#05C168"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface SuccsessCheckIconProps {
  containerStyles?: CSSProp;
}

export default SuccsessCheckIcon;

const Svg = styled.svg<{ $CSS?: CSSProp }>`
  ${({ $CSS }) => $CSS}
`;
