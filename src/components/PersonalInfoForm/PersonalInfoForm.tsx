import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { ITitle } from "src/ui/ITitle";
import { AppInput } from "src/ui/AppInput";
import { IButton } from "src/ui/IButton";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { selectors, thunks } from "src/store/ducks";
import { successRequestMessage } from "src/services/toastFunctions";
import { IToast } from "src/ui/IToast";

const PersonalInfoForm: React.FC = () => {
  const loading = useAppSelector(selectors.user.selectLoading);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitted },
  } = useForm<InputsType>({
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    dispatch(thunks.user.updatePersonalData(data)).then((res) => {
      if (res.type === "users/update/fulfilled") {
        successRequestMessage("Data updated successfully");
      }
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <ITitle containerStyles={titleStyles}>Personal Info</ITitle>
        <div>
          <Controller
            control={control}
            name="username"
            rules={{
              required: "Username is required",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppInput
                placeholder="Username"
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
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email value",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppInput
                placeholder="Email"
                value={value}
                onChange={onChange}
                isError={error ? true : false}
                isSuccess={isSubmitted && !error}
                errorMessage={error?.message}
              />
            )}
          />
        </div>
        <IButton containerStyles={buttonStyles} loading={loading === "pending"}>
          Save
        </IButton>
      </Container>
      <IToast />
    </form>
  );
};

interface InputsType {
  username: string;
  email: string;
}

export default PersonalInfoForm;

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
