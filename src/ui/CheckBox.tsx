import React, { InputHTMLAttributes } from "react";
import { colors } from "src/styles/colors";
import styled, { css, CSSProp } from "styled-components";
import { IText } from "./IText";

export const CheckBox: React.FC<CheckBoxProps> = ({
  isChecked,
  label,
  containerStyles = {},
  ...props
}): JSX.Element => {
  return (
    <Container $CSS={containerStyles}>
      <ILabel>
        <CheckboxContainer>
          <HiddenCheckbox type="checkbox" checked={isChecked} {...props} />
          <StyledCheckbox checked={isChecked}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        {label && (
          <IText as="span" containerStyles={labelTextStyles}>
            Label Text
          </IText>
        )}
      </ILabel>
    </Container>
  );
};

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  label?: string;
  containerStyles?: CSSProp;
}

const Container = styled.div<{ $CSS?: CSSProp }>`
  display: inline-block;
  ${({ $CSS }) => $CSS}
`;

const ILabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const labelTextStyles = css`
  margin-left: 8px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${colors.white};
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 28px;
  height: 28px;
  background: ${({ checked }) => (checked ? colors.primary : colors.white)};
  border: 1px solid
    ${({ checked }) => (checked ? colors.primary : colors.gray400)};
  border-radius: 7px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 4px rgb(252 88 66 / 30%);
  }

  /* ${HiddenCheckbox}:hover + & {
    background: ${({ checked }) => (checked ? colors.red400 : colors.gray400)};
    border: 1px solid
      ${({ checked }) => (checked ? colors.red400 : colors.gray400)};
  } */

  ${HiddenCheckbox}:disabled + & {
    opacity: 0.5;
    background: ${({ checked }) => (checked ? colors.red400 : colors.white)};
    border: 1px solid
      ${({ checked }) => (checked ? colors.red400 : colors.white)};
  }

  ${HiddenCheckbox}:hover:disabled + & {
    opacity: 0.5;
    background: ${({ checked }) => (checked ? colors.red400 : colors.white)};
    border: 1px solid
      ${({ checked }) => (checked ? colors.red400 : colors.white)};
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;
