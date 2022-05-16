import { NextPage } from "next";
import styled from "styled-components";

import { SignUpForm } from "src/components/SignUpForm";
import { StepTabs } from "src/components/StepTabs";
import { MainLayout } from "src/layouts/MainLayout";

const RegistrationPage: NextPage = () => {
  return (
    <MainLayout title="Registration">
      <Container>
        <StepTabs step={1} />
        <SignUpForm />
      </Container>
    </MainLayout>
  );
};

export default RegistrationPage;

const Container = styled.div`
  padding-top: 32px;
  max-width: 620px;
  margin: auto;
`;
