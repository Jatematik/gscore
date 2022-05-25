import React from "react";
import styled, { css } from "styled-components";

import { colors } from "src/styles/colors";
import { ILink } from "src/ui/ILink";

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item: ItemProps) => (
        <LinkContainer key={item.id.toString()}>
          {item.url ? (
            <ILink url={item.url} containerStyles={linkStyles}>
              <IconContainer>{item.icon}</IconContainer>
              <TextSpan>{item.title}</TextSpan>
            </ILink>
          ) : (
            <AppText onClick={item.func}>
              <IconContainer>{item.icon}</IconContainer>
              <TextSpan>{item.title}</TextSpan>
            </AppText>
          )}
        </LinkContainer>
      ))}
    </Container>
  );
};

interface DropDownProps {
  items: ItemProps[];
}

interface ItemProps {
  id: number;
  title: string;
  url?: string;
  func?: () => void;
  icon: JSX.Element;
}

const Container = styled.div`
  position: absolute;
  min-width: 188px;
  border-radius: 12px;
  background-color: ${colors.black27};
  display: flex;
  flex-direction: column;
  top: calc(100% + 28px);
  right: 0;
  padding: 28px 24px;
`;

const LinkContainer = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: 12px;
`;

const AppText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TextSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
`;

const linkStyles = css`
  display: flex;
  align-items: center;
  &:hover::before {
    content: none;
  }
`;

export default DropDown;
