import { NextPage } from "next";
import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Checkout } from "src/components/Checkout";
import { StartSubscription } from "src/components/StartSubscription";
import { MainLayout } from "src/layouts/MainLayout";
import Container from "src/layouts/Container/Container";

const CheckoutPage: NextPage = ({}) => {
  const [payment, setPayment] = useState<boolean>(false);

  return (
    <MainLayout title="Gscore | Checkout">
      <Container containerStyles={containerStyles}>
        {payment ? <StartSubscription /> : <Checkout setPayment={setPayment} />}
      </Container>
    </MainLayout>
  );
};

export default CheckoutPage;

const containerStyles = css`
  padding-top: 32px;
  max-width: 620px;
`;
