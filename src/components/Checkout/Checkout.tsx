import React, { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

import { ITitle } from 'src/ui/ITitle';
import { Accordion } from '../Accordion';
import { Tabs } from '../Tabs';
import { IText } from 'src/ui/IText';
import { IButton } from 'src/ui/IButton';

const Checkout: React.FC<CheckoutProps> = ({ setPayment }) => {
  const handlePayment = () => setPayment(true);
  return (
    <>
      <Tabs step={3} />
      <Container>
        <ITitle as="h3" containerStyles={titleStyles}>
          Checkout
        </ITitle>
        <Accordion />
        <Wrapper>
          <IText as="span" containerStyles={textStyles}>
            Total
          </IText>
          <IText as="span" containerStyles={textStyles}>
            $77
          </IText>
        </Wrapper>
        <IButton containerStyles={btnStyles} onClick={handlePayment}>
          Purchase
        </IButton>
      </Container>
    </>
  );
};

interface CheckoutProps {
  setPayment: Dispatch<SetStateAction<boolean>>;
}

export default Checkout;

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
  margin-bottom: 32px;
`;

const textStyles = css`
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
`;

const btnStyles = css`
  min-width: 200px;
`;
