import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import { colors } from 'src/styles/colors';
import { Line } from 'src/ui/Line';
import MarkerIcon from 'src/assets/icons/MarkerIcon';
import { ILink } from 'src/ui/ILink';
import { IText } from 'src/ui/IText';
import { ITitle } from 'src/ui/ITitle';

const Card: React.FC<CardProps> = ({ active }) => {
  const [activeColor, setActiveColor] = useState<string>('');

  useEffect(() => {
    if (active) setActiveColor(colors.primary); //исправляет React Hydration Error
  }, [active]);

  return (
    <Container $active={active}>
      <Price as="span">$77</Price>
      <ITitle as="h3" containerStyles={titleStyles}>
        Single site license
      </ITitle>
      <IText
        containerStyles={[
          descStyles,
          active ? `color: ${colors.white}` : `color: ${colors.gray400}`,
        ]}
      >
        Get the advanced WordPress plugin that optimizes content with GSC
        keywords at one low annual price
      </IText>
      <Line containerStyles={active ? lineStyles : {}} />
      <ListContainer>
        <ListItem>
          <MarkerIcon checkColor={active ? colors.primary : colors.black27} />
          <IText as="span" containerStyles={textStyles}>
            Single site license
          </IText>
        </ListItem>
        <ListItem>
          <MarkerIcon checkColor={active ? colors.primary : colors.black27} />
          <IText as="span" containerStyles={textStyles}>
            Special introductory pricing
          </IText>
        </ListItem>
        <ListItem>
          <MarkerIcon checkColor={active ? colors.primary : colors.black27} />
          <IText as="span" containerStyles={textStyles}>
            Unlimited Pages and Keywords
          </IText>
        </ListItem>
        <ListItem>
          <MarkerIcon checkColor={active ? colors.primary : colors.black27} />
          <IText as="span" containerStyles={textStyles}>
            Billed annually
          </IText>
        </ListItem>
      </ListContainer>
      <ILink
        url="/registration"
        containerStyles={[linkStyles, active ? `color: ${activeColor}` : {}]}
      >
        Get Gscore
      </ILink>
    </Container>
  );
};

interface CardProps {
  active?: boolean;
}

const Container = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ $active }) =>
    $active ? colors.primary : colors.black27};
  padding: 42px 48px;
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  width: 404px;
  ${({ $active }) => $active && `transform: translateY(-50px);`}
`;

const Price = styled(IText)`
  display: block;
  margin-bottom: 4px;
  font-family: 'DM Sans', sans-serif;
  font-size: 54px;
  line-height: 66px;
  text-align: center;
`;

const ListContainer = styled.ul`
  margin-bottom: 32px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const linkStyles = css`
  margin-top: auto;
  padding: 26px 0;
  display: block;
  text-align: center;
  box-shadow: 0px 8px 28px rgb(0 0 0 / 6%);
  border-radius: 6px;
  background-color: ${colors.white};
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${colors.black18};
`;

const titleStyles = css`
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 26px;
`;

const textStyles = css`
  margin-left: 14px;
  font-size: 18px;
  line-height: 20px;
`;

const descStyles = css`
  text-align: center;
`;

const lineStyles = css`
  background-color: ${colors.white};
`;

export default Card;
