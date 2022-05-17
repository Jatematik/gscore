import React, { ReactNode } from "react";
import styled, { css, CSSProp } from "styled-components";

import { colors } from "src/styles/colors";
import { Line } from "src/ui/Line";

const Accordion: React.FC<AccordionProps> = ({
  header,
  body,
  containerStyles = {},
}) => {
  return (
    <Container $CSS={containerStyles}>
      <Wrapper>{header}</Wrapper>
      <Line containerStyles={lineStyles} />
      <Wrapper>{body}</Wrapper>
    </Container>
  );
};

interface AccordionProps {
  header: ReactNode;
  body: ReactNode;
  containerStyles?: CSSProp;
}

export default Accordion;

const Container = styled.div<{ $CSS?: CSSProp }>`
  padding: 48px 0;
  border-radius: 12px;
  background-color: ${colors.black27};

  ${({ $CSS }) => $CSS}
`;

const Wrapper = styled.div`
  padding: 0 32px;
  display: flex;
`;

const lineStyles = css`
  margin: 32px 0;
`;
