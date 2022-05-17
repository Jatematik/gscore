import { NextPage } from "next";
import styled, { css } from "styled-components";

import { SignUpForm } from "src/components/SignUpForm";
import { StepTabs } from "src/components/StepTabs";
import { MainLayout } from "src/layouts/MainLayout";
import Container from "src/layouts/Container/Container";

const RegistrationPage: NextPage = () => {
  return (
    <MainLayout title="Registration">
      <Container containerStyles={containerStyles}>
        <StepTabs step={1} />
        <SignUpForm />
      </Container>
    </MainLayout>
  );
};

export default RegistrationPage;

const containerStyles = css`
  padding-top: 32px;
  max-width: 620px;
`;
