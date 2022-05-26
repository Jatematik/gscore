import React from "react";
import styled, { css } from "styled-components";

import { colors } from "src/styles/colors";
import { IText } from "src/ui/IText";
import { Line } from "src/ui/Line";

const tabs = [
  {
    id: 1,
    title: "Create account",
  },
  {
    id: 2,
    title: "Log in",
  },
  {
    id: 3,
    title: "Chekout",
  },
];

const StepTabs: React.FC<StepTabsProps> = ({ step }) => {
  return (
    <Container>
      {tabs.map((tab, i) => (
        <TabWrapper key={tab.id.toString()}>
          <IText containerStyles={textStyles}>{tab.title}</IText>
          <Line
            containerStyles={[lineStyles, i + 1 <= step ? activeLine : {}]}
          />
        </TabWrapper>
      ))}
    </Container>
  );
};

interface StepTabsProps {
  step: number;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    display: none;
  }
`;

const TabWrapper = styled.div`
  flex-grow: 1;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
`;

const textStyles = css`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
`;

const lineStyles = css`
  margin: 0;
  border: 4px solid ${colors.black700};
  border-radius: 4px;
`;

const activeLine = css`
  border: 4px solid ${colors.primary};
`;

export default StepTabs;
