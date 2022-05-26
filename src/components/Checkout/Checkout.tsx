import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { ITitle } from "src/ui/ITitle";
import { Accordion } from "../Accordion";
import { StepTabs } from "../StepTabs";
import { IText } from "src/ui/IText";
import { IButton } from "src/ui/IButton";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { actions, selectors } from "src/store/ducks";
import { generateKey, totalSum } from "src/utils";
import { ProductProps } from "src/types";
import { apiRequests } from "src/services/apiFunctions";
import { Product } from "../Product";

const Checkout: React.FC<CheckoutProps> = ({
  setPayment,
  setPurchasedProducts,
}) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const allProducts = useAppSelector(selectors.cart.selectProducts);
  const dispatch = useAppDispatch();

  const handlePayment = () => {
    if (products.length > 0) {
      setLoading(true);
      const requestArray: Promise<any>[] = [];

      setPurchasedProducts(products);

      products.forEach((item) => {
        requestArray.push(
          apiRequests.products.buySubscribe({
            priceId: item.id,
          })
        );
      });

      Promise.all(requestArray)
        .then(() => {
          setPayment(true);
          dispatch(actions.cart.resetProduct());
        })
        .catch((e) => {
          console.warn(e);
        })
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  return (
    <>
      <StepTabs step={3} />
      <Container>
        <ITitle as="h3" containerStyles={titleStyles}>
          Checkout
        </ITitle>
        <Accordion
          header={
            <>
              <IText as="span" containerStyles={headerStyles}>
                Package name
              </IText>
              <IText as="span" containerStyles={headerStyles}>
                Price
              </IText>
            </>
          }
          body={
            <Box>
              {products.length > 0 ? (
                products.map((product, i) => (
                  <Product
                    key={generateKey(product.name)}
                    product={product}
                    index={i}
                    isDeleteBtn
                  />
                ))
              ) : (
                <IText as="span">No products</IText>
              )}
            </Box>
          }
        />
        <Wrapper>
          <IText as="span" containerStyles={textStyles}>
            Total
          </IText>
          <IText as="span" containerStyles={textStyles}>
            ${totalSum(products)}
          </IText>
        </Wrapper>
        <IButton
          containerStyles={btnStyles}
          onClick={handlePayment}
          loading={loading}
          disabled={products.length === 0}
        >
          Purchase
        </IButton>
      </Container>
    </>
  );
};

interface CheckoutProps {
  setPayment: Dispatch<SetStateAction<boolean>>;
  setPurchasedProducts: Dispatch<SetStateAction<ProductProps[]>>;
}

export default Checkout;

const Container = styled.div`
  padding: 64px 0;

  @media (max-width: 576px) {
    padding: 32px 0;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  margin: 24px 0 48px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    margin: 20px 0 24px;
  }
`;

const titleStyles = css`
  text-align: start;
  margin-bottom: 32px;
`;

const textStyles = css`
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;

  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 22px;
  }
`;

const btnStyles = css`
  min-width: 200px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const headerStyles = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  flex-basis: 85%;
  &:last-child {
    flex-basis: 15%;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 22px;
  }
`;
