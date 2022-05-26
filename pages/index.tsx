import type { GetStaticProps, NextPage } from "next";
import styled, { css } from "styled-components";

import { PricingCard } from "src/components/PricingCard";
import { MainLayout } from "src/layouts/MainLayout";
import { colors } from "src/styles/colors";
import { ILink } from "src/ui/ILink";
import { IText } from "src/ui/IText";
import { ITitle } from "src/ui/ITitle";
import Container from "src/layouts/Container/Container";
import { apiRequests } from "src/services/apiFunctions";
import { ProductProps } from "src/types";

const Home: NextPage<{ products: ProductProps[] }> = ({ products }) => {
  return (
    <MainLayout title="Gscore">
      <Container containerStyles={containerStyles}>
        <ITitle>Get started with Gscore today!</ITitle>
        <CardContainer>
          {products.map((product, i) => (
            <PricingCard
              key={product.id.toString()}
              active={i === 1}
              product={product}
            />
          ))}
        </CardContainer>
        <FlexBlock>
          <IText as="span">Have more than 10 sites?</IText>
          <ILink url="/" containerStyles={linkStyles}>
            Contact us
          </ILink>
        </FlexBlock>
      </Container>
    </MainLayout>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 98px;
  padding-bottom: 32px;

  @media (max-width: 992px) {
    padding-top: 40px;
    flex-wrap: wrap;
  }

  @media (max-width: 576px) {
    padding: 32px 10px;
  }
`;

const FlexBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const linkStyles = css`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.primary};
  &:hover::before {
    background-color: ${colors.primary};
  }
`;

const containerStyles = css`
  padding: 32px 0px;
`;

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await apiRequests.products.getProducts();
  const products = response.data;

  return {
    props: { products },
  };
};
