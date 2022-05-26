import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

import { colors } from "src/styles/colors";
import { Line } from "src/ui/Line";
import MarkerIcon from "src/assets/icons/MarkerIcon";
import { IText } from "src/ui/IText";
import { ITitle } from "src/ui/ITitle";
import { routes } from "src/types/routes";
import { ProductProps } from "src/types";
import {
  oneSiteBenefits,
  sevenSitesBenefits,
  threeSitesBenefits,
} from "../../types/static";
import { IButton } from "src/ui/IButton";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { actions, selectors } from "src/store/ducks";

const PricingCard: React.FC<PricingCardProps> = ({ active, product }) => {
  const [activeColor, setActiveColor] = useState<string>("");
  const token = useAppSelector(selectors.user.selectToken);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleButton = () => {
    dispatch(actions.cart.addProduct(product));

    if (token) {
      router.push(routes.CHECKOUT);
    } else {
      router.push(routes.REGISTRATION);
    }
  };

  useEffect(() => {
    if (active) setActiveColor(colors.primary); //исправляет React Hydration Error
  }, [active]);

  return (
    <Container $active={active}>
      <Price as="span">${product.prices[0].price}</Price>
      <ITitle as="h3" containerStyles={titleStyles}>
        {product.name}
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
      <Line containerStyles={active ? lineStyles : lineMedia} />
      <ListContainer>
        {product.sitesCount === 1
          ? oneSiteBenefits.map((item) => (
              <ListItem key={item}>
                <MarkerContainer>
                  <MarkerIcon
                    checkColor={active ? colors.primary : colors.black27}
                  />
                </MarkerContainer>
                <IText as="span" containerStyles={textStyles}>
                  {item}
                </IText>
              </ListItem>
            ))
          : product.sitesCount === 3
          ? threeSitesBenefits.map((item) => (
              <ListItem key={item}>
                <MarkerContainer>
                  <MarkerIcon
                    checkColor={active ? colors.primary : colors.black27}
                  />
                </MarkerContainer>
                <IText as="span" containerStyles={textStyles}>
                  {item}
                </IText>
              </ListItem>
            ))
          : sevenSitesBenefits.map((item) => (
              <ListItem key={item}>
                <MarkerContainer>
                  <MarkerIcon
                    checkColor={active ? colors.primary : colors.black27}
                  />
                </MarkerContainer>
                <IText as="span" containerStyles={textStyles}>
                  {item}
                </IText>
              </ListItem>
            ))}
      </ListContainer>
      <IButton
        btnType="secondary"
        containerStyles={active ? {} : nonActiveBtn}
        onClick={handleButton}
      >
        Get Gscore
      </IButton>
    </Container>
  );
};

interface PricingCardProps {
  active?: boolean;
  product: ProductProps;
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

  @media (max-width: 1300px) {
    flex-basis: 32%;
    padding: 28px;
  }

  @media (max-width: 992px) {
    flex-basis: 60%;
    margin: auto;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    ${({ $active }) => $active && `transform: translateY(0);`}
  }

  @media (max-width: 768px) {
    flex-basis: 80%;
  }

  @media (max-width: 576px) {
    flex-basis: 100%;
  }

  @media (max-width: 400px) {
    padding: 10px 16px;
  }
`;

const MarkerContainer = styled.div`
  width: 27px;
  height: 27px;
`;

const Price = styled(IText)`
  display: block;
  margin-bottom: 4px;
  font-family: "DM Sans", sans-serif;
  font-size: 54px;
  line-height: 66px;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 40px;
    line-height: 56px;
  }
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

const nonActiveBtn = css`
  border-radius: 6px;
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

  @media (max-width: 576px) {
    margin: 20px 0;
  }
`;

const lineMedia = css`
  @media (max-width: 576px) {
    margin: 20px 0;
  }
`;

export default PricingCard;
