import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

import { Tabs } from "src/components/Tabs";
import { MainLayout } from "src/layouts/MainLayout";
import { SignInForm } from "src/components/SignInForm";

const LoginPage: NextPage = ({}) => {
  return (
    <MainLayout title="Login">
      <Container>
        <Tabs step={2} />
        <SignInForm />
      </Container>
    </MainLayout>
  );
};

export default LoginPage;

const Container = styled.div`
  padding-top: 32px;
  max-width: 620px;
  margin: auto;
`;
