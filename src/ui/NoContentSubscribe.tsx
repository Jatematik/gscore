import React from "react";
import styled, { css } from "styled-components";

import CrossIcon from "src/assets/icons/CrossIcon";
import { IText } from "./IText";
import Container from "src/layouts/Container/Container";
import { ILink } from "./ILink";
import { colors } from "src/styles/colors";

export const NoContentSubscribe: React.FC = (): JSX.Element => {
  return (
    <Container containerStyles={noSubscribeContainerStyles}>
      <Circle>
        <CrossIcon />
      </Circle>

      <IText containerStyles={noSubscribeText}>No active subscriptions</IText>
      <IText containerStyles={noSubscribeSubText}>
        You can subscribe right now by clicking on the button below
      </IText>
      <ILink
        url="/"
        isButton
        btnType="primary"
        containerStyles={noSubscribeLink}
      >
        Get Gscore
      </ILink>
    </Container>
  );
};

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: ${colors.black700};
`;

const noSubscribeContainerStyles = css`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 430px;
`;

const noSubscribeText = css`
  margin: 24px 0 8px;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
`;

const noSubscribeSubText = css`
  margin-bottom: 32px;
  text-align: center;
`;

const noSubscribeLink = css`
  min-width: 164px;
`;
