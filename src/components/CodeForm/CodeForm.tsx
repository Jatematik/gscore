import React, { useState } from "react";
import Container from "src/layouts/Container/Container";
import { apiRequests } from "src/services/apiFunctions";
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

  const submit = () => {
    setLoad(true);

    dispatch(
      thunks.codes.asyncManageSelfCodes({
        subscribeId: subscribeCardId,
        codesIds,
      })
    )
      .unwrap()
      .then((codes) =>
        dispatch(
          actions.subscribes.setCodes({
            id: subscribeCardId,
            codes,
          })
        )
      )
      .catch((e) => {
        errorRequestMessage(e.message);
      })
      .finally(() => setLoad(false));
  };

  return (
    <Container>
      {codes.length > 0 && (
        <>
          {codes.map((item) => (
            <CodeItem
              key={item.id.toString()}
              item={item}
              subscribeCardId={subscribeCardId}
              setCodesIds={setCodesIds}
            />
          ))}
          <ConfirmContainer>
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
          </ConfirmContainer>
        </>
      )}
      <IToast />
    </Container>
  );
};

export default CodeForm;

const ConfirmContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const confirmStyles = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
`;

const btnStyles = css`
  min-width: 148px;
`;
