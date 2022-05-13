import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled, { CSSProp } from 'styled-components';
import { IButton } from './IButton';

export const ILink: React.FC<ILinkProps> = ({
  url,
  containerStyles = {},
  isButton,
  btnType = 'primary',
  children,
}): JSX.Element => {
  return (
    <Link href={url} passHref>
      {isButton ? (
        <a>
          <IButton
            as="span"
            btnType={btnType}
            containerStyles={containerStyles}
          >
            {children}
          </IButton>
        </a>
      ) : (
        <AppLink $CSS={containerStyles}>{children}</AppLink>
      )}
    </Link>
  );
};

interface ILinkProps {
  url: string;
  containerStyles?: CSSProp;
  children?: ReactNode;
  isButton?: boolean;
  btnType?: 'primary' | 'secondary' | 'text';
}

const AppLink = styled.a<{ $CSS?: CSSProp }>`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  ${({ $CSS }) => $CSS}
`;
