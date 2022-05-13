import React from 'react';
import styled, { css } from 'styled-components';

import { ITitle } from 'src/ui/ITitle';
import { Accordion } from '../Accordion';
import { IText } from 'src/ui/IText';
import { IButton } from 'src/ui/IButton';
import { ILink } from 'src/ui/ILink';
import { routes } from 'src/types/routes';

const StartSubscription: React.FC<StartSubscriptionProps> = ({}) => {
  return (
    <Container>
      <ITitle as="h3" containerStyles={titleStyles}>
        Start your subscription
      </ITitle>
      <IText containerStyles={textStyles}>
        We have sent you a payment receipt by e-mail and a link to download the
        plugin with a license key.
      </IText>
      <Accordion />
      <ILink url={routes.SUBSCRIPTIONS} isButton containerStyles={btnStyles}>
        Go to my subscriptions
      </ILink>
    </Container>
  );
};

interface StartSubscriptionProps {}

export default StartSubscription;

const Container = styled.div`
  padding: 64px 0;
`;

const Wrapper = styled.div`
  margin: 24px 0 48px;
  display: flex;
  justify-content: space-between;
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
`;
