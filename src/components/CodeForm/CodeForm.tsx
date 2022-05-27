import React, { useState } from "react";
import Container from "src/layouts/Container/Container";
import { errorRequestMessage } from "src/services/toastFunctions";
import { actions, selectors, thunks } from "src/store/ducks";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { IButton } from "src/ui/IButton";
import { IText } from "src/ui/IText";
import { IToast } from "src/ui/IToast";
import styled, { css } from "styled-components";
import { CodeItem } from "../CodeItem";

const CodeForm: React.FC = () => {
  const codes = useAppSelector(selectors.codes.selectCodes);
  const subscribeCardId = useAppSelector(selectors.codes.selectId);
  const dispatch = useAppDispatch();

  const [codesIds, setCodesIds] = useState<number[]>([]);
  const [load, setLoad] = useState<boolean>(false);

  console.log(codes, "codes");

  const submit = () => {
    setLoad(true);

    dispatch(
      thunks.codes.asyncManageSelfCodes({
        subscribeId: subscribeCardId,
        codesIds,
      })
    )
      .unwrap()
      .then((codes) => {
        dispatch(
          actions.subscribes.setCodes({
            id: subscribeCardId,
            codes,
          })
        );
      })
      .catch((e) => {
        errorRequestMessage(e.message);
      })
      .finally(() => setLoad(false));
  };

  return (
    <>
      {codes.length > 0 && (
        <Container>
          <FlexBox>
            {codes.map((item) => (
              <CodeItem
                key={item.id.toString()}
                item={item}
                subscribeCardId={subscribeCardId}
                setCodesIds={setCodesIds}
              />
            ))}
            {codes[0].status === "HOLD" && (
              <>
                <IText containerStyles={confirmStyles}>
                  Select the domains you want to keep
                </IText>
                <IButton
                  onClick={submit}
                  disabled={codesIds.length === 0}
                  loading={load}
                  containerStyles={btnStyles}
                >
                  Confirm
                </IButton>
              </>
            )}
          </FlexBox>
        </Container>
      )}
      <IToast />
    </>
  );
};

export default CodeForm;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const confirmStyles = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 28px;
  }
`;

const btnStyles = css`
  margin-bottom: 30px;
  min-width: 148px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
