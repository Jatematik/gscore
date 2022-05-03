import * as React from 'react';
import { SVGProps } from 'react';

const MarkerIcon = ({ checkColor = '#272727', ...props }: MarkerIconProps) => (
  <svg
    width={26}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 26.231c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
      fill="#fff"
    />
    <path
      d="m7.117 14.072 3.362 3.362 8.404-8.405"
      stroke={checkColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface MarkerIconProps extends SVGProps<SVGSVGElement> {
  checkColor?: string;
}

export default MarkerIcon;
