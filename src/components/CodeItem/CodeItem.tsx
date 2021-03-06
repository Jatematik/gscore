import React, {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
import { errorRequestMessage } from "src/services/toastFunctions";

const CodeItem: React.FC<CodeItemProps> = ({
  item,
  subscribeCardId,
  onChange,
  defaultChecked,
  setCodesIds,
  ...props
}) => {
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
      .catch((e) => {
        errorRequestMessage(e);
      })
      .finally(() => setLoad(false));
  };

  useEffect(() => {
    if (checked) {
      setCodesIds((prev) => [...prev, item.id]);
    } else {
      setCodesIds((prev) => prev.filter((el) => el !== item.id));
    }
  }, [checked, item.id, setCodesIds]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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
        <CheckBox
          isChecked={checked}
          onChange={handleCheckboxChange}
          disabled={item.status !== "HOLD"}
          value={item.id}
          {...props}
        />
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

interface CodeItemProps extends InputHTMLAttributes<HTMLInputElement> {
  item: SubscribeCodeProps;
  subscribeCardId: number;
  setCodesIds: Dispatch<SetStateAction<number[]>>;
}

export default CodeItem;

const GridBox = styled.div``;

const Container = styled.div<{ isActive: "ACTIVE" | "INACTIVE" | "HOLD" }>`
  padding: 24px 32px 31px;
  margin-bottom: 32px;
  background-color: ${colors.black27};
  border-radius: 12px;
  flex-basis: 100%;

  display: grid;
  grid-column-gap: 35px;
  grid-row-gap: 10px;

  ${({ isActive }) =>
    isActive === statuses.INACTIVE
      ? css`
          grid-template-columns: 60px 296px 3fr 1fr 160px;
        `
      : css`
          grid-template-columns: 60px 296px 4fr 160px;
        `}

  & > ${GridBox} {
    ${({ isActive }) =>
      isActive === statuses.INACTIVE
        ? css`
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
          `
        : css`
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
          `};
  }

  @media (max-width: 1300px) {
    ${({ isActive }) =>
      isActive === statuses.INACTIVE
        ? css`
            grid-template-columns: auto;
          `
        : css`
            grid-template-columns: auto;
          `}
  }

  @media (max-width: 768px) {
    ${({ isActive }) =>
      isActive === statuses.INACTIVE
        ? css`
            grid-column-gap: 20px;
            grid-row-gap: 0;
            grid-template-columns: 0fr 1fr 1fr;
          `
        : css`
            grid-column-gap: 20px;
            grid-row-gap: 0;
            grid-template-columns: 0fr 1fr;
          `}

    & > ${GridBox} {
      ${({ isActive }) =>
        isActive === statuses.INACTIVE
          ? css`
              &:nth-child(1) {
                margin-top: 8px;
                grid-column: 1/4;
              }
              &:nth-child(2) {
                grid-column: 1/4;
              }
              &:nth-child(3) {
                display: none;
              }
              &:nth-child(4) {
                grid-column: auto;
                grid-row: 1;
              }
              &:nth-child(5) {
                margin-bottom: 24px;
                grid-row: 3;
                grid-column: 1/4;
              }
              &:nth-child(6) {
                grid-row: 5;
                grid-column: 1/4;
              }
              &:nth-child(7) {
                grid-row: 1;
                grid-column: 3/4;
                align-self: end;
                justify-content: end;
              }
              &:nth-child(8) {
                grid-column: auto;
                grid-row: 1;
              }
            `
          : css`
              &:nth-child(1) {
                margin-top: 8px;
                grid-column: 1/3;
              }
              &:nth-child(2) {
                grid-column: 1/3;
              }
              &:nth-child(3) {
                display: none;
              }
              &:nth-child(4) {
                grid-column: auto;
                grid-row: 1;
              }
              &:nth-child(5) {
                margin-bottom: 24px;
                grid-row: 3;
                grid-column: 1/3;
              }
              &:nth-child(6) {
                grid-row: 5;
                grid-column: 1/3;
              }
              &:nth-child(7) {
                grid-column: auto;
                grid-row: 1;
              }
            `};
    }
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
