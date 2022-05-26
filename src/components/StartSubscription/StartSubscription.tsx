import React from "react";
import styled, { css } from "styled-components";

import { ITitle } from "src/ui/ITitle";
import { Accordion } from "../Accordion";
import { IText } from "src/ui/IText";
import { ILink } from "src/ui/ILink";
import { routes } from "src/types/routes";
import { ProductProps } from "src/types";
import { Product } from "../Product";
import { generateKey } from "src/utils";

const StartSubscription: React.FC<StartSubscriptionProps> = ({ products }) => {
  return (
    <Container>
      <ITitle as="h3" containerStyles={titleStyles}>
        Start your subscription
      </ITitle>
      <IText containerStyles={textStyles}>
        We have sent you a payment receipt by e-mail and a link to download the
        plugin with a license key.
      </IText>
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
            {products.map((product, i) => (
              <Product
                product={product}
                index={i}
                key={generateKey(product.name)}
              />
            ))}
          </Box>
        }
      />
      <ILink url={routes.SUBSCRIPTIONS} isButton containerStyles={btnStyles}>
        Go to my subscriptions
      </ILink>
    </Container>
  );
};

interface StartSubscriptionProps {
  products: ProductProps[];
}

export default StartSubscription;

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

const titleStyles = css`
  text-align: start;
  margin-bottom: 16px;
`;

const textStyles = css`
  margin-bottom: 48px;
  font-size: 14px;
  line-height: 24px;
`;

const btnStyles = css`
  display: block;
  margin-top: 48px;
  width: 100%;
  text-align: center;
`;
