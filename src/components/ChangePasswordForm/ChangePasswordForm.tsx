import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { AppInput } from "src/ui/AppInput";
import { IButton } from "src/ui/IButton";
import { ITitle } from "src/ui/ITitle";
import { apiRequests } from "src/services/apiFunctions";
import {
  errorRequestMessage,
  successRequestMessage,
} from "src/services/toastFunctions";
import { IToast } from "src/ui/IToast";

const ChangePasswordForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitted },
  } = useForm<InputsType>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    setLoading(true);
    apiRequests.user
      .updatePassword(data)
      .then(() => successRequestMessage("Password changed successfully!"))
      .catch((e) => errorRequestMessage(e.message))
      .finally(() => {
        setLoading(false);
        reset();
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <ITitle containerStyles={titleStyles}>Change password</ITitle>
        <div>
          <Controller
            control={control}
            name="currentPassword"
            rules={{
              required: "Password is required",
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
                type="password"
              />
            )}
          />
          <Controller
            control={control}
            name="newPassword"
            rules={{
              required: "Password is required",
              minLength: {
                message: "Password must be 6 characters",
                value: 6,
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppInput
                placeholder="New password"
                value={value}
                onChange={onChange}
                isError={error ? true : false}
                isSuccess={isSubmitted && !error}
                errorMessage={error?.message}
                type="password"
              />
            )}
          />
        </div>
        <IButton containerStyles={buttonStyles} loading={loading}>
          Save
        </IButton>
      </Container>
      <IToast />
    </form>
  );
};

interface InputsType {
  currentPassword: string;
  newPassword: string;
}

export default ChangePasswordForm;

const Container = styled.div`
  width: 512px;

  @media (max-width: 576px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

const titleStyles = css`
  font-size: 28px;
  line-height: 40px;
  text-align: start;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

const buttonStyles = css`
  width: 160px;
`;
