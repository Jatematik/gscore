import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled, { CSSProp } from 'styled-components';

export const ILink: React.FC<ILinkProps> = ({
  url,
  containerStyles = {},
  children,
}): JSX.Element => {
  return (
    <Link href={url} passHref>
      <AppLink $CSS={containerStyles}>{children}</AppLink>
    </Link>
  );
};

interface ILinkProps {
  url: string;
  containerStyles?: CSSProp;
  children?: ReactNode;
}

const AppLink = styled.a<{ $CSS?: CSSProp }>`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  ${({ $CSS }) => $CSS}
`;
