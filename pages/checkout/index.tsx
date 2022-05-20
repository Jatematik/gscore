import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { css } from "styled-components";

import { Checkout } from "src/components/Checkout";
import { StartSubscription } from "src/components/StartSubscription";
import { MainLayout } from "src/layouts/MainLayout";
import Container from "src/layouts/Container/Container";
import { useAppSelector } from "src/store/hooks";
import { selectors } from "src/store/ducks";
import { routes } from "src/types/routes";
import { ProductProps } from "src/types";

const CheckoutPage: NextPage = ({}) => {
  const [payment, setPayment] = useState<boolean>(false);
  const [purchasedProducts, setPurchasedProducts] = useState<ProductProps[]>(
    []
  );

  const token = useAppSelector(selectors.user.selectToken);

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push(routes.LOGIN);
    }
  }, [token, router]);

  return (
    <MainLayout title="Gscore | Checkout">
      <Container containerStyles={containerStyles}>
        {payment ? (
          <StartSubscription products={purchasedProducts} />
        ) : (
          <Checkout
            setPayment={setPayment}
            setPurchasedProducts={setPurchasedProducts}
          />
        )}
      </Container>
    </MainLayout>
  );
};

export default CheckoutPage;

const containerStyles = css`
  padding-top: 32px;
  max-width: 620px;
`;
