import React, { useState } from "react";
import styled from "styled-components";

import { colors } from "src/styles/colors";
import { CheckBox } from "src/ui/CheckBox";

const CardItem: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Container>
      <CheckBox
        label=""
        isChecked={checked}
        onChange={() => setChecked(!checked)}
      />
    </Container>
  );
};

export default CardItem;

const Container = styled.div`
  padding: 24px 32px 31px;
  background-color: ${colors.black27};
  border-radius: 12px;
`;
