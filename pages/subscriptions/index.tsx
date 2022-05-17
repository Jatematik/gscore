import { NextPage } from "next";
import { css } from "styled-components";

import Container from "src/layouts/Container/Container";
import { MainLayout } from "src/layouts/MainLayout";
import { ISwiper } from "src/ui/ISwiper";
import { ITitle } from "src/ui/ITitle";
import { IButton } from "src/ui/IButton";
import { Card } from "src/components/Card";
import { CardItem } from "src/components/CardItem";

const Subscriptions: NextPage = () => {
  return (
    <MainLayout title="Gscore | Subscriptions">
      <Container containerStyles={containerStyles}>
        <ITitle containerStyles={titleStyles}>My subscribtions</ITitle>
        <IButton containerStyles={buttonStyles}>Upgrade</IButton>
      </Container>
      <ISwiper slides={[1, 2, 3]} />
      <Container>
        <CardItem />
      </Container>
    </MainLayout>
  );
};

export default Subscriptions;

const titleStyles = css`
  text-align: start;
`;

const buttonStyles = css`
  min-width: 152px;
`;

const containerStyles = css`
  margin: 32px auto;
  display: flex;
  justify-content: space-between;
`;
