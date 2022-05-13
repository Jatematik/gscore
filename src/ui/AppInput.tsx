import React, { InputHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

import { colors } from 'src/styles/colors';
import SuccsessCheckIcon from 'src/assets/icons/SuccsessCheckIcon';
import RejectIcon from 'src/assets/icons/RejectIcon';
import { IText } from './IText';

export const AppInput: React.FC<AppInputProps> = ({
  containerStyles = {},
  isError,
  isSuccess,
  errorMessage,
  ...props
}): JSX.Element => {
  return (
    <>
      <ContainerInput>
        <Input
          $CSS={containerStyles}
          isIcon={isError ? true : isSuccess ? true : false}
          isSuccess={isSuccess}
          isError={isError}
          {...props}
        />
        {isSuccess && <SuccsessCheckIcon containerStyles={iconStyles} />}
        {isError && <RejectIcon containerStyles={iconStyles} />}
      </ContainerInput>
      <ErrorText as="span">{errorMessage}</ErrorText>
    </>
  );
};

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyles?: CSSProp;
  isError?: boolean;
  isSuccess?: boolean;
  errorMessage?: string;
}

interface InputProps {
  $CSS?: CSSProp;
  isIcon?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

const Input = styled.input<InputProps>`
  padding: 25px 23px;
  width: 100%;
  border: 1px solid ${colors.gray300};
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  font-family: 'ThiccCboi', sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.black700};
  caret-color: ${colors.primary};
  outline-width: 0;
  &::placeholder {
    color: ${colors.gray500};
  }
  &:disabled {
    background-color: ${colors.gray300};
  }

  ${({ isSuccess }) => isSuccess && `border: 1px solid ${colors.green300};`}

  ${({ isError }) => isError && `border: 1px solid ${colors.red300};`}

  ${({ isIcon }) => isIcon && 'padding-right: 55px;'}

  ${({ $CSS }) => $CSS};
`;

const ContainerInput = styled.div`
  width: 100%;
  position: relative;
`;

const ErrorText = styled(IText)`
  display: block;
  padding-top: 2px;
  height: 24px;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.red300};
`;

const iconStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 23px;
`;
