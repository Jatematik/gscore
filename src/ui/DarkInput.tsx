import React, { InputHTMLAttributes } from "react";
import styled, { CSSProp } from "styled-components";

import { colors } from "src/styles/colors";
import CopyIcon from "src/assets/icons/CopyIcon";

export const DarkInput: React.FC<DarkInputProps> = ({
  containerStyles = {},
  ...props
}): JSX.Element => {
  return (
    <ContainerInput>
      <Input $CSS={containerStyles} {...props} />
      <CopyBtn>
        <CopyIcon />
      </CopyBtn>
    </ContainerInput>
  );
};

interface DarkInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyles?: CSSProp;
}

const ContainerInput = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input<{ $CSS?: CSSProp }>`
  background-color: ${colors.black700};
  width: 100%;
  padding: 25px 23px;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  border: none;

  color: ${colors.gray500};
  ${({ $CSS }) => $CSS};
`;

const CopyBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  background-color: transparent;
  border: none;
  padding: 12px;
  cursor: pointer;
`;
