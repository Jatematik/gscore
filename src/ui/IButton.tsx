import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styled, { CSSProp } from 'styled-components';

import { colors } from 'src/styles/colors';
import { Loader } from './Loader';

export const IButton: React.FC<IButtonProps> = ({
  containerStyles = {},
  children,
  btnType = 'primary',
  loading,
  as = 'button',
  ...props
}) => {
  return (
    <Button as={as} $CSS={containerStyles} btnType={btnType} {...props}>
      {loading ? (
        <Loader color={btnType === 'primary' ? colors.white : colors.primary} />
      ) : (
        children
      )}
    </Button>
  );
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  containerStyles?: CSSProp;
  btnType?: 'primary' | 'secondary' | 'text';
  loading?: boolean;
  as?: 'span' | 'button';
}

interface ButtonProps {
  $CSS?: CSSProp;
  btnType: 'primary' | 'secondary' | 'text';
}

const Button = styled.button<ButtonProps>`
  padding: 20px;
  font-family: 'ThiccCboi';
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  border: none;
  transition: 0.25s;
  cursor: pointer;

  ${({ btnType }) =>
    btnType === 'primary'
      ? `
      color: ${colors.white};
      background-color: ${colors.primary};
      box-shadow: 0px 10px 28px rgb(252 88 66 / 20%);
      &:hover {
        background-color: ${colors.red400};
      }
      &:focus {
        box-shadow: 0 0 0 4px rgb(252 88 66 / 30%);
      }
      &:disabled {
        opacity: 0.6;
        cursor: initial;
      }
      &:disabled:hover {
        background-color: ${colors.primary};
      }
    `
      : btnType === 'secondary'
      ? `
      color: ${colors.primary};
      background-color: ${colors.white};
      box-shadow: 0px 10px 28px rgb(252 88 66 / 20%);
      &:hover {
        color: ${colors.red400};
      }
      &:focus {
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3);
      }
      &:disabled {
        opacity: 0.6;
        cursor: initial;
      }
      &:disabled:hover {
        color: ${colors.primary};
      }
    `
      : `
      color: ${colors.primary};
      background-color: transparent;
      &:hover {
        color: ${colors.red400};
      }
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      &:disabled:hover {
        color: ${colors.primary};
      }
    `}

  ${({ $CSS }) => $CSS}
`;
