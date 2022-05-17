import React, { HTMLAttributes } from "react";
import { colors } from "src/styles/colors";
import styled, { css } from "styled-components";

export const CheckBox: React.FC<CheckBoxProps> = ({
  isChecked,
  label,
  ...props
}): JSX.Element => {
  return (
    <>
      {/* <Container>
          <InputCheckBox
            type="checkbox"
            id={label}
            check={isChecked}
            {...props}
          />
          <LabelRoot htmlFor={label} check={isChecked}>
            {label}
          </LabelRoot>
        </Container> */}
      <LabelRoot check={isChecked}>
        <InputCheckBox type="checkbox" check={isChecked} {...props} />
        <span>123</span>
      </LabelRoot>
    </>
  );
};

interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  isChecked: boolean;
  label?: string;
}

const Container = styled.div`
  position: relative;
`;

const LabelRoot = styled.label<{ check?: boolean }>`
  position: relative;
  display: inline-block;
  /* padding-left: 38px;
  color: white; */
  cursor: pointer;
  &::before {
    position: absolute;
    content: "";
    transition: 0.2s;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    background-color: ${colors.white};
    border: 1px solid ${colors.gray400};
    border-radius: 7px;
    ${({ check }) =>
      check &&
      css`
        background-color: ${colors.primary};
        border: 1px solid ${colors.primary};
      `}
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 1px;
    left: 11px;
    width: 6px;
    height: 13px;
    ${({ check }) =>
      check &&
      css`
        border: solid ${colors.white};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      `}
  }
`;

const InputCheckBox = styled.input<{ check: boolean }>`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  margin: 0;
  margin-left: 1px;
  &:focus + ${LabelRoot}::before {
    box-shadow: 0 0 0 4px rgb(252 88 66 / 30%);
  }

  &:hover + ${LabelRoot}::before {
    ${({ check }) =>
      check
        ? css`
            background-color: ${colors.red400};
            border: 1px solid ${colors.red400};
          `
        : css`
            background-color: ${colors.gray400};
            border: 1px solid ${colors.gray400};
          `}
  }

  &:disabled + ${LabelRoot}::before {
    ${({ check }) =>
      check
        ? css`
            opacity: 0.5;
            background-color: ${colors.red400};
            border: 1px solid ${colors.red400};
          `
        : css`
            opacity: 0.5;
            background-color: ${colors.white};
            border: 1px solid ${colors.white};
          `}
  }
  &:hover:disabled + ${LabelRoot}::before {
    ${({ check }) =>
      check
        ? css`
            opacity: 0.5;
            background-color: ${colors.red400};
            border: 1px solid ${colors.red400};
          `
        : css`
            opacity: 0.5;
            background-color: ${colors.white};
            border: 1px solid ${colors.white};
          `}
  }
`;

// const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;

// const StyledCheckbox = styled.div<{ checked: boolean }>`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) => (props.checked ? "salmon" : "papayawhip")};
//   border-radius: 3px;
//   transition: all 150ms;

//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px pink;
//   }
// `;

// const CheckboxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `;
