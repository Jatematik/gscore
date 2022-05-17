import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled, { css } from "styled-components";

import { PricingCard } from "src/components/PricingCard";
import { MainLayout } from "src/layouts/MainLayout";
import { colors } from "src/styles/colors";
import { ILink } from "src/ui/ILink";
import { IText } from "src/ui/IText";
import { ITitle } from "src/ui/ITitle";
import Container from "src/layouts/Container/Container";

const Home: NextPage = () => {
  return (
    <MainLayout title="Gscore">
      <Container containerStyles={containerStyles}>
        <ITitle>Get started with Gscore today!</ITitle>
        <CardContainer>
          <PricingCard />
          <PricingCard active />
          <PricingCard />
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
`;

const FlexBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const linkStyles = css`
  font-size: 18px;
  line-height: 30px;
  text-decoration: underline;
  color: ${colors.primary};
`;

const containerStyles = css`
  padding: 32px 0px;
`;

export default Home;
