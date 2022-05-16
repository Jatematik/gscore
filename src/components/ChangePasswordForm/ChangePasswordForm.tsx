import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { AppInput } from "src/ui/AppInput";
import { IButton } from "src/ui/IButton";
import { ITitle } from "src/ui/ITitle";

const ChangePasswordForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitted },
  } = useForm<InputsType>({
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <ITitle containerStyles={titleStyles}>Change password</ITitle>
        <div>
          <Controller
            control={control}
            name="password"
            rules={{
              minLength: {
                message: "Password must be 6 characters",
                value: 6,
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppInput
                placeholder="Current password"
                value={value}
                onChange={onChange}
                isError={error ? true : false}
                isSuccess={isSubmitted && !error}
                errorMessage={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="newPassword"
            rules={{
              validate: (value) => value === watch("password"),
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppInput
                placeholder="New password"
                value={value}
                onChange={onChange}
                isError={error ? true : false}
                isSuccess={isSubmitted && !error}
                errorMessage={error?.message}
              />
            )}
          />
        </div>
        <IButton containerStyles={buttonStyles}>Save</IButton>
      </Container>
    </form>
  );
};

interface InputsType {
  password: string;
  newPassword: string;
}

export default ChangePasswordForm;

const Container = styled.div`
  width: 512px;
`;

const titleStyles = css`
  font-size: 28px;
  line-height: 40px;
  text-align: start;
  margin-bottom: 24px;
`;

const buttonStyles = css`
  width: 160px;
`;
