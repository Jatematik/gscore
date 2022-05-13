import * as React from 'react';
import { SVGProps } from 'react';

import { colors } from 'src/styles/colors';

const LoaderIcon = ({ color = colors.primary, ...props }: LoaderIconProps) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 12a8 8 0 1 1-2.343-5.657"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

interface LoaderIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

export default LoaderIcon;
