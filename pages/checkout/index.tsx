import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Checkout } from 'src/components/Checkout';
import { StartSubscription } from 'src/components/StartSubscription';
import { MainLayout } from 'src/layouts/MainLayout';

const CheckoutPage: NextPage = ({}) => {
  const [payment, setPayment] = useState<boolean>(false);

  return (
    <MainLayout title="Gscore | Checkout">
      <Container>
        {payment ? <StartSubscription /> : <Checkout setPayment={setPayment} />}
      </Container>
    </MainLayout>
  );
};

export default CheckoutPage;

const Container = styled.div`
  padding-top: 32px;
  max-width: 620px;
  margin: auto;
`;
