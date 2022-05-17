import { NextPage } from "next";
import React from "react";
import styled, { css } from "styled-components";

import { StepTabs } from "src/components/StepTabs";
import { MainLayout } from "src/layouts/MainLayout";
import { SignInForm } from "src/components/SignInForm";
import Container from "src/layouts/Container/Container";

const LoginPage: NextPage = ({}) => {
  return (
    <MainLayout title="Login">
      <Container containerStyles={containerStyles}>
        <StepTabs step={2} />
        <SignInForm />
      </Container>
    </MainLayout>
  );
};

export default LoginPage;

const containerStyles = css`
  padding-top: 32px;
  max-width: 620px;
`;
