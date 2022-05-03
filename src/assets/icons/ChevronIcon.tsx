import * as React from 'react';
import { SVGProps } from 'react';
import styled from 'styled-components';

interface ChevronProps extends SVGProps<SVGSVGElement> {
  position: 'top' | 'bottom' | 'left' | 'right';
}

const ChevronIcon = ({ position, ...props }: ChevronProps) => (
  <ContainerSvg position={position}>
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.311 15.5-7-7-7 7"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </ContainerSvg>
);

const ContainerSvg = styled.div<{
  position: 'top' | 'bottom' | 'left' | 'right';
}>`
  transform: ${(props) =>
    props.position === 'top'
      ? 'rotate(0deg)'
      : props.position === 'bottom'
      ? 'rotate(180deg)'
      : props.position === 'left'
      ? 'rotate(270deg)'
      : 'rotate(90deg)'};
  transition: 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ChevronIcon;
