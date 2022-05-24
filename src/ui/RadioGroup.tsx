import React, { InputHTMLAttributes } from "react";
import { colors } from "src/styles/colors";
import styled from "styled-components";

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  ...props
}): JSX.Element => {
  return (
    <Container>
      {options.map((item) => (
        <Label htmlFor={item.id.toString()} key={item.id}>
          <Option
            name={name}
            value={item.id}
            type="radio"
            id={item.id.toString()}
            disabled={item.disabled}
            {...props}
          />
          <Text isChecked={props.checked}>{item.name}</Text>
        </Label>
      ))}
    </Container>
  );
};

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: { id: number; name: string; disabled: boolean }[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 5px 0;
  cursor: pointer;
`;

const Text = styled.p<{ isChecked: boolean | undefined }>`
  color: ${colors.black700};

  ${Option}:checked + & {
    color: ${colors.orange300};
  }

  ${Option}:disabled + & {
    color: ${colors.gray400};
  }
`;
