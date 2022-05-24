import React, { ReactNode, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { useOutside } from "src/hooks/useOutside";
import { colors } from "src/styles/colors";
import { IButton } from "src/ui/IButton";
import { RadioGroup } from "src/ui/RadioGroup";
import { apiRequests } from "src/services/apiFunctions";
import { useAppDispatch } from "src/store/hooks";
import { actions, thunks } from "src/store/ducks";

const ModalUpgrade: React.FC<ModalUpgradeProps> = ({
  isOpen,
  children,
  onRequestClose,
  subscribeId,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { control, handleSubmit, watch } = useForm<InputType>({
    defaultValues: {
      productId: undefined,
    },
  });

  const onSubmit: SubmitHandler<InputType> = (data) => {
    apiRequests.products
      .changeSubscribe({
        subscribeId,
        productId: Number(data.productId),
      })
      .then(() => {
        dispatch(thunks.subscribes.asyncGetSubscribes({}));
        dispatch(actions.codes.resetCodes());
      })
      .finally(() => {
        onRequestClose && onRequestClose();
      });
  };

  useOutside(ref, () => {
    onRequestClose && onRequestClose();
  });

  return (
    <>
      {isOpen && (
        <Overlay {...props}>
          <Containner ref={ref}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="productId"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange } }) => (
                  <RadioGroup
                    name="sites"
                    onChange={onChange}
                    options={[
                      {
                        id: 1,
                        name: "One cite",
                        disabled: false,
                      },
                      {
                        id: 2,
                        name: "Three cites",
                        disabled: false,
                      },
                      {
                        id: 3,
                        name: "Seven cites",
                        disabled: false,
                      },
                    ]}
                  />
                )}
              />

              <IButton
                type="submit"
                containerStyles={btnStyles}
                disabled={watch("productId") === undefined}
              >
                Upgrade
              </IButton>
            </form>
          </Containner>
        </Overlay>
      )}
    </>
  );
};

interface InputType {
  productId: number;
}

interface ModalUpgradeProps {
  isOpen: boolean;
  children?: ReactNode;
  onRequestClose?: () => void;
  subscribeId: number;
}

export default ModalUpgrade;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
`;

const Containner = styled.div`
  position: absolute;
  min-width: 320px;
  padding: 30px;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white100};
`;

const btnStyles = css`
  margin-top: 20px;
`;
