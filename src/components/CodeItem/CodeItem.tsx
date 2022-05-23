import React, { useState } from "react";
import styled, { css } from "styled-components";

import { colors } from "src/styles/colors";
import { CheckBox } from "src/ui/CheckBox";
import { IText } from "src/ui/IText";
import { DarkInput } from "src/ui/DarkInput";
import { statuses, SubscribeCodeProps } from "src/types";
import { IButton } from "src/ui/IButton";
import { useAppDispatch } from "src/store/hooks";
import { actions, thunks } from "src/store/ducks";
import { transformText } from "src/utils";

const CodeItem: React.FC<CodeItemProps> = ({ item, subscribeCardId }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleActivate = () => {
    setLoad(true);
    dispatch(
      thunks.codes.asyncActivateCode({
        code: item.code,
      })
    )
      .unwrap()
      .then((res) => {
        dispatch(
          actions.subscribes.updateCode({
            id: subscribeCardId,
            code: {
              ...res,
            },
          })
        );
      })
      .catch((e) => console.warn(e))
      .finally(() => setLoad(false));
  };

  return (
    <Container isActive={item.status}>
      <GridBox>
        <IText as="span" containerStyles={titleStyles}>
          License code
        </IText>
      </GridBox>
      <GridBox>
        <IText as="span" containerStyles={titleStyles}>
          Domain
        </IText>
      </GridBox>
      <GridBox>
        <IText as="span" containerStyles={titleStyles}>
          Status
        </IText>
      </GridBox>
      <GridBox>
        <CheckBox isChecked={checked} onChange={() => setChecked(!checked)} />
      </GridBox>
      <GridBox>
        <DarkInput defaultValue={item.code} disabled isCopied />
      </GridBox>
      <GridBox>
        <DarkInput defaultValue={item.origin ? item.origin : ""} disabled />
      </GridBox>
      {item.status === statuses.INACTIVE && (
        <GridBox>
          <IButton
            btnType="secondary"
            onClick={handleActivate}
            containerStyles={buttonStyles}
            loading={load}
          >
            Activate
          </IButton>
        </GridBox>
      )}
      <GridBox>
        <IText
          as="span"
          containerStyles={[
            statusStyles,
            item.status === statuses.ACTIVE
              ? active
              : item.status === statuses.INACTIVE
              ? inactive
              : hold,
          ]}
        >
          {transformText(item.status)}
        </IText>
      </GridBox>
    </Container>
  );
};

interface CodeItemProps {
  item: SubscribeCodeProps;
  subscribeCardId: number;
}

export default CodeItem;

const GridBox = styled.div``;

const Container = styled.div<{ isActive: "ACTIVE" | "INACTIVE" | "HOLD" }>`
  padding: 24px 32px 31px;
  margin-bottom: 32px;
  background-color: ${colors.black27};
  border-radius: 12px;

  display: grid;
  grid-column-gap: 35px;
  grid-row-gap: 10px;

  ${({ isActive }) =>
    isActive === statuses.ACTIVE
      ? css`
          grid-template-columns: 60px 296px 4fr 160px;
        `
      : css`
          grid-template-columns: 60px 296px 3fr 1fr 160px;
        `}

  & > ${GridBox} {
    ${({ isActive }) =>
      isActive === statuses.ACTIVE
        ? css`
            &:nth-child(1) {
              grid-column: 2 / 3;
            }
            &:nth-child(2) {
              grid-column: 3 / 4;
            }
            &:nth-child(3) {
              grid-column: 4 / 5;
            }
            &:nth-child(4) {
              align-self: center;
            }
            &:nth-child(7) {
              align-self: center;
            }
          `
        : css`
            &:nth-child(1) {
              grid-column: 2 / 3;
            }
            &:nth-child(2) {
              grid-column: 3 / 4;
            }
            &:nth-child(3) {
              grid-column: 5 / 6;
            }
            &:nth-child(4) {
              align-self: center;
            }
            &:nth-child(7) {
              display: flex;
              justify-content: center;
              align-self: center;
              align-items: center;
            }
            &:nth-child(8) {
              align-self: center;
            }
          `};
  }
`;

const titleStyles = css`
  display: inline-block;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.gray500};
`;

const buttonStyles = css`
  min-width: 111px;
`;

const statusStyles = css`
  margin: auto;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`;

const active = css`
  color: ${colors.green300};
`;

const inactive = css`
  color: ${colors.red300};
`;

const hold = css`
  color: ${colors.orange300};
`;
