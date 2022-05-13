import { useRouter } from 'next/router';
import React from 'react';
import styled, { css } from 'styled-components';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { AppInput } from 'src/ui/AppInput';
import { IButton } from 'src/ui/IButton';
import { ITitle } from 'src/ui/ITitle';
import { routes } from 'src/types/routes';

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<InputsType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    console.log(data);
    router.push(routes.CHECKOUT);
  };

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
            required: 'Email is required',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Invalid email value',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <AppInput
                placeholder="Email"
                value={value}
                onChange={onChange}
                isError={error ? true : false}
                isSuccess={isSubmitted && !error}
                errorMessage={error?.message}
              />
            );
          }}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              message: 'Password must be 6 characters',
              value: 6,
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <AppInput
                type="password"
                placeholder="Password"
                value={value}
                onChange={onChange}
                isError={error ? true : false}
                isSuccess={isSubmitted && !error}
                errorMessage={error?.message}
              />
            );
          }}
        />

        <IButton type="submit" containerStyles={btnStyles}>
          Log in
        </IButton>
      </form>
    </Container>
  );
};

interface LoginFormProps {}

interface InputsType {
  email: string;
  password: string;
}

export default LoginForm;

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
