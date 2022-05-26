import React, { ReactNode, useState } from "react";
import styled, { css } from "styled-components";

import { colors } from "src/styles/colors";
import { IText } from "src/ui/IText";
import { Line } from "src/ui/Line";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <Box>
        {tabs.map((tab, i) => (
          <Tab
            key={`${tab.title}.${i}`}
            onClick={() => {
              setActive(i);
            }}
            active={active === i}
          >
            <IText
              as="span"
              containerStyles={active === i ? activeTitleStyles : titleStyles}
            >
              {tab.title}
            </IText>
          </Tab>
        ))}
        <Line containerStyles={lineStyles} />
      </Box>
      {tabs.map((tab, i) => {
        return (
          <div key={`${tab.title}.${i}`}>
            {i === active ? tab.children : undefined}
          </div>
        );
      })}
    </>
  );
};

interface TabsProps {
  tabs: {
    title: string;
    children: ReactNode;
  }[];
}

export default Tabs;

const Box = styled.div`
  margin: 48px 0;
  display: flex;

  @media (max-width: 576px) {
    margin: 28px 0;
  }
`;

const Tab = styled.div<{ active: boolean }>`
  padding: 0px 24px 12px;
  border-bottom: 2px solid ${colors.primary};
  cursor: pointer;

  ${({ active }) =>
    active
      ? `border-bottom: 2px solid ${colors.primary};`
      : `border-bottom: 2px solid ${colors.black700};`}
`;

const titleStyles = css`
  display: flex;
  text-align: center;
  line-height: 20px;
  font-weight: 700;
  color: ${colors.black700};
`;

const activeTitleStyles = css`
  display: flex;
  text-align: center;
  line-height: 20px;
  font-weight: 700;
  color: ${colors.primary};
`;

const lineStyles = css`
  margin: 0;
  height: 2px;
  background-color: ${colors.black700};
  flex-grow: 1;
  margin-top: auto;
`;
