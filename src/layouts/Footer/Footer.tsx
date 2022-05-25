import React from "react";
import FacebookIcon from "src/assets/icons/FacebookIcon";
import LinkedInIcon from "src/assets/icons/LinkedInIcon";
import LogoIcon from "src/assets/icons/LogoIcon";
import TwitterIcon from "src/assets/icons/TwitterIcon";
import Container from "src/layouts/Container/Container";
import { colors } from "src/styles/colors";
import { ILink } from "src/ui/ILink";
import { IText } from "src/ui/IText";
import { Line } from "src/ui/Line";
import styled, { css } from "styled-components";

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterContainer>
      <Container>
        <ILink url="/" containerStyles={linkStyles}>
          <LogoIcon />
        </ILink>
        <IText containerStyles={textStyles}>
          Ut enim ad minim veniam quis nostrud exercitation ea commodo
        </IText>
        <Line containerStyles={lineColor} />
        <BottomContainer>
          <p>
            Copyright © 2022 GScore | All Rights Reserved | Cookies | Privacy
            Policy
          </p>
          <SocialContainer>
            <ILink url="/" containerStyles={socialLinkStyles}>
              <FacebookIcon />
            </ILink>
            <ILink url="/" containerStyles={socialLinkStyles}>
              <TwitterIcon />
            </ILink>
            <ILink url="/" containerStyles={socialLinkStyles}>
              <LinkedInIcon />
            </ILink>
          </SocialContainer>
        </BottomContainer>
      </Container>
    </FooterContainer>
  );
};

interface FooterProps {}

const FooterContainer = styled.footer`
  padding-top: 60px;
  padding-bottom: 42px;
  border-top: 1px solid ${colors.black700};
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const textStyles = css`
  max-width: 300px;
  color: ${colors.gray400};
`;

const linkStyles = css`
  display: inline-block;
  margin-bottom: 24px;
  &::before {
    content: none;
  }
`;

const lineColor = css`
  background-color: ${colors.black700};
`;

const socialLinkStyles = css`
  margin-left: 16px;
  &::before {
    content: none;
  }
`;

export default Footer;
