import { NextPage } from 'next';
import styled from 'styled-components';

import { CreateAccountForm } from 'src/components/CreateAccountForm';
import { Tabs } from 'src/components/Tabs';
import { MainLayout } from 'src/layouts/MainLayout';

const RegistrationPage: NextPage = () => {
  return (
    <MainLayout title="Registration">
      <Container>
        <Tabs step={1} />
        <CreateAccountForm />
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