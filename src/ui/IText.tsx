import React, { HTMLAttributes, ReactNode } from "react";
import styled, { CSSProp } from "styled-components";

export const IText: React.FC<ITextProps> = ({
  children,
  containerStyles = {},
  as = "p",
  ...props
}) => {
  return (
    <Text as={as} $CSS={containerStyles} {...props}>
      {children}
    </Text>
  );
};

interface ITextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerStyles?: CSSProp;
  as?: "span" | "p";
}

const Text = styled.p<{ $CSS?: CSSProp }>`
  font-size: 18px;
  line-height: 30px;
  ${({ $CSS }) => $CSS}
`;
