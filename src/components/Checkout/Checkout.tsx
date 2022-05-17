import React, { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";

import { ITitle } from "src/ui/ITitle";
import { Accordion } from "../Accordion";
import { StepTabs } from "../StepTabs";
import { IText } from "src/ui/IText";
import { IButton } from "src/ui/IButton";
import TrashIcon from "src/assets/icons/TrashIcon";

const Checkout: React.FC<CheckoutProps> = ({ setPayment }) => {
  const handlePayment = () => setPayment(true);
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
            <>
              <IText as="span" containerStyles={bodyStyles}>
                Single site license
              </IText>
              <IText as="span" containerStyles={bodyStyles}>
                $77
                <TrashIcon />
              </IText>
            </>
          }
        />
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

const headerStyles = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  flex-basis: 85%;
  &:last-child {
    flex-basis: 15%;
  }
`;

const bodyStyles = css`
  font-size: 24px;
  line-height: 38px;
  flex-basis: 85%;
  &:last-child {
    flex-basis: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
