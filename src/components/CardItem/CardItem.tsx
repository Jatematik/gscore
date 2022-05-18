import React, { useState } from "react";
import styled, { css } from "styled-components";

import { colors } from "src/styles/colors";
import { CheckBox } from "src/ui/CheckBox";
import { IText } from "src/ui/IText";
import { DarkInput } from "src/ui/DarkInput";

const CardItem: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Container>
      <CheckBox
        isChecked={checked}
        onChange={() => setChecked(!checked)}
        containerStyles={checkBoxStyles}
      />
      <Box>
        <IText as="span" containerStyles={titleStyles}>
          License code
        </IText>
        <DarkInput />
      </Box>
      <Box>
        <IText as="span" containerStyles={titleStyles}>
          Domain
        </IText>
        <DarkInput />
      </Box>
      <Box>
        <IText as="span" containerStyles={titleStyles}>
          Status
        </IText>
        <IText as="span" containerStyles={statusStyles}>
          Active
        </IText>
      </Box>
    </Container>
  );
};

export default CardItem;

const Container = styled.div`
  display: flex;
  padding: 24px 32px 31px;
  margin-bottom: 32px;
  background-color: ${colors.black27};
  border-radius: 12px;
`;

const Box = styled.div`
  width: 296px;
  margin-right: 28px;
  &:nth-child(3) {
    width: 620px;
    margin-right: 56px;
  }
  &:nth-child(4) {
    display: flex;
    flex-direction: column;
    width: auto;
    margin-right: auto;
  }
`;

const checkBoxStyles = css`
  margin: auto 48px 23px 0;
`;

const titleStyles = css`
  display: inline-block;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.gray500};
`;

const statusStyles = css`
  margin: auto;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${colors.green300};
`;
