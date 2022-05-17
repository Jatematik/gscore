import React from "react";
import styled, { css } from "styled-components";

import { colors } from "src/styles/colors";
import { IButton } from "src/ui/IButton";
import { IText } from "src/ui/IText";
import { Accordion } from "../Accordion";

const Card: React.FC<CardProps> = ({ active }) => {
  return (
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
        <BodyContainer>
          <FlexContainer>
            <IText as="span" containerStyles={bodyStyles}>
              Single site license
            </IText>
            <IText as="span" containerStyles={bodyStyles}>
              $77
            </IText>
          </FlexContainer>
          <IText as="span" containerStyles={dateValidStyles}>
            valid until 21.10.2022
          </IText>
          <IButton btnType="secondary" containerStyles={buttonStyles}>
            View
          </IButton>
        </BodyContainer>
      }
      containerStyles={active ? {} : nonActiveStyles}
    />
  );
};

interface CardProps {
  active?: boolean;
}

export default Card;

const BodyContainer = styled.div`
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-bottom: 12px;
`;

const headerStyles = css`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  flex-basis: 85%;
  &:last-child {
    flex-basis: 15%;
  }
`;

const bodyStyles = css`
  font-size: 24px;
  line-height: 26px;
  flex-basis: 85%;
  &:last-child {
    flex-basis: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const dateValidStyles = css`
  display: block;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.gray500};
`;

const buttonStyles = css`
  min-width: 120px;
`;

const nonActiveStyles = css`
  opacity: 0.6;
`;
