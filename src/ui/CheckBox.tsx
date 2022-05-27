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
          <input
            type="checkbox"
            className="check-input"
            checked={isChecked}
            {...props}
          />
          <div className="check-styled">
            <Icon
              viewBox="0 0 24 24"
              style={{
                visibility: isChecked ? "visible" : "hidden",
              }}
            >
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </div>
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
  isChecked: boolean | undefined;
  label?: string;
  containerStyles?: CSSProp;
}

const Container = styled.div<{ $CSS?: CSSProp }>`
  display: inline-block;
  ${({ $CSS }) => $CSS}
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${colors.white};
  stroke-width: 2px;
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
