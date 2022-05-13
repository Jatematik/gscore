import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { AppInput } from "src/ui/AppInput";
import { IButton } from "src/ui/IButton";
import { ITitle } from "src/ui/ITitle";
import { routes } from "src/types/routes";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { actions, selectors, thunks } from "src/store/ducks";
import { errorRequestMessage } from "src/services/toastFunctions";
import { IToast } from "src/ui/IToast";

const SignInForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectors.user.selectLoading);
  const error = useAppSelector(selectors.user.selectError);

  const {
    control,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<InputsType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    dispatch(thunks.user.signIn(data)).then((response) => {
      if (response.type === "users/sign-in/fulfilled") {
        router.push(routes.CHECKOUT);
      }
    });
  };

  useEffect(() => {
    if (error) {
      errorRequestMessage(error);
      dispatch(actions.user.resetError());
    }
  }, [error, dispatch]);

  return (
    <Container>
      <ITitle as="h3" containerStyles={titleStyles}>
        Log in
      </ITitle>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              message: "Password must be 6 characters",
              value: 6,
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <AppInput
              type="password"
              placeholder="Password"
              value={value}
              onChange={onChange}
              isError={error ? true : false}
              isSuccess={isSubmitted && !error}
              errorMessage={error?.message}
            />
          )}
        />

        <IButton
          type="submit"
          containerStyles={btnStyles}
          loading={loading === "pending"}
        >
          Log in
        </IButton>
      </form>
      <IToast />
    </Container>
  );
};

interface InputsType {
  email: string;
  password: string;
}

export default SignInForm;

const Container = styled.div`
  padding: 64px 0;
`;

const titleStyles = css`
  text-align: start;
  margin-bottom: 32px;
`;

const btnStyles = css`
  min-width: 200px;
  min-height: 58px;
  margin-top: 24px;
`;
