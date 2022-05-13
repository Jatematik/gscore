import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'src/styles/colors';
import { Line } from 'src/ui/Line';
import { IText } from 'src/ui/IText';
import TrashIcon from 'src/assets/icons/TrashIcon';

const Accordion: React.FC<AccordionProps> = ({}) => {
  return (
    <Container>
      <Wrapper>
        <IText as="span" containerStyles={topTextStyles}>
          Package name
        </IText>
        <IText as="span" containerStyles={topTextStyles}>
          Price
        </IText>
      </Wrapper>
      <Line containerStyles={lineStyles} />
      <Wrapper>
        <IText as="span" containerStyles={bottomTextStyles}>
          Single site license
        </IText>
        <IText as="span" containerStyles={bottomTextStyles}>
          $77
          <TrashIcon />
        </IText>
      </Wrapper>
    </Container>
  );
};

interface AccordionProps {}

export default Accordion;

const Container = styled.div`
  padding: 48px 0;
  border-radius: 12px;
  background-color: ${colors.black27};
`;

const Wrapper = styled.div`
  padding: 0 32px;
  display: flex;
`;

const lineStyles = css`
  margin: 32px 0;
`;

const topTextStyles = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  flex-basis: 85%;
  &:last-child {
    flex-basis: 15%;
  }
`;

const bottomTextStyles = css`
  font-size: 24px;
  line-height: 38px;
  flex-basis: 85%;
  &:last-child {
    flex-basis: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
