import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styled, { css } from "styled-components";

import { ITitle } from "src/ui/ITitle";
import { IText } from "src/ui/IText";
import { AppInput } from "src/ui/AppInput";
import { colors } from "src/styles/colors";
import { IButton } from "src/ui/IButton";
import { routes } from "src/types/routes";
import { ILink } from "src/ui/ILink";
import { errorRequestMessage } from "src/services/toastFunctions";
import { IToast } from "src/ui/IToast";
import { apiRequests } from "src/services/apiFunctions";

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<InputsType>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    setLoading(true);
    apiRequests.user
      .signUp(data)
      .then(() => {
        router.push(routes.LOGIN);
      })
      .catch((e) => {
        errorRequestMessage(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <ITitle as="h3" containerStyles={titleStyles}>
        Create account
      </ITitle>
      <IText containerStyles={textStyles}>
        You need to enter your name and email. We will send you a temporary
        password by email
      </IText>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          rules={{
            required: "Username is required",
            minLength: {
              message: "Username must be 6 characters",
              value: 6,
            },
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

        <IButton type="submit" containerStyles={btnStyles} loading={loading}>
          Send password
        </IButton>
      </form>

      <NextStep>
        <IText as="span" containerStyles={textQuestionStyles}>
          Have an account?
        </IText>
        <ILink url={routes.LOGIN} containerStyles={linkStyles}>
          Go to the next step
        </ILink>
      </NextStep>

      <IToast />
    </Container>
  );
};

interface InputsType {
  username: string;
  email: string;
  password: string;
}

export default SignUpForm;

const Container = styled.div`
  padding: 64px 0;
`;

const NextStep = styled.div`
  margin-top: 48px;
  display: flex;
`;

const titleStyles = css`
  text-align: start;
  margin-bottom: 16px;
`;

const textStyles = css`
  margin-bottom: 32px;
  font-size: 14px;
  line-height: 24px;
`;

const textQuestionStyles = css`
  font-size: 16px;
  line-height: 18px;
  margin-right: 8px;
`;

const linkStyles = css`
  font-size: 16px;
  line-height: 18px;
  color: ${colors.primary};
  &:hover::before {
    background-color: ${colors.primary};
  }
`;

const btnStyles = css`
  min-width: 200px;
  min-height: 58px;
  margin-top: 24px;
`;
