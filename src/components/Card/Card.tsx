import React, { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";

import { colors } from "src/styles/colors";
import { IButton } from "src/ui/IButton";
import { IText } from "src/ui/IText";
import { Accordion } from "../Accordion";
import { SubscribeCodeProps, SubscribeProps } from "src/types";
import { useAppDispatch } from "src/store/hooks";
import { actions } from "src/store/ducks";

const Card: React.FC<CardProps> = ({ active, card }) => {
  const date = new Date(parseInt(`${card.currentPeriodEnd}000`, 10));
  const dispatch = useAppDispatch();

  const handleView = () => {
    console.log(card);
  };

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
              {card.product.name}
            </IText>
            <IText as="span" containerStyles={bodyStyles}>
              ${card.product.prices[0].price}
            </IText>
          </FlexContainer>
          <IText as="span" containerStyles={dateValidStyles}>
            valid until {date.toLocaleDateString()}
          </IText>
          <IButton
            btnType="secondary"
            containerStyles={buttonStyles}
            onClick={handleView}
            disabled={!active}
          >
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
  card: SubscribeProps;
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
