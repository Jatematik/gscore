import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Card } from 'src/components/Card';
import { MainLayout } from 'src/layouts/MainLayout';
import { colors } from 'src/styles/colors';
import { ILink } from 'src/ui/ILink';
import { IText } from 'src/ui/IText';
import { ITitle } from 'src/ui/ITitle';

const Home: NextPage = () => {
  return (
    <MainLayout title="Gscore">
      <Container>
        <ITitle>Get started with Gscore today!</ITitle>
        <CardContainer>
          <Card />
          <Card active />
          <Card />
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

const Container = styled.div`
  padding: 32px 0px;
`;

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

export default Home;
