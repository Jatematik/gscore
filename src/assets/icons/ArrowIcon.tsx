import * as React from "react";
import { SVGProps } from "react";

import { colors } from "src/styles/colors";

const ArrowIcon = ({ way, color = colors.white, ...props }: ArrowIconProps) => (
  <>
    {way === "right" ? (
      <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12.54 3.54 21 12l-8.46 8.46M21 12H3"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11.46 3.54 3 12l8.46 8.46M3 12h18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </>
);

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  way: "left" | "right";
  color?: string;
}

export default ArrowIcon;
