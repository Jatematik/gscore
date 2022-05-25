import { NextPage } from "next";
import { css } from "styled-components";

import Container from "src/layouts/Container/Container";
import { MainLayout } from "src/layouts/MainLayout";
import { IText } from "src/ui/IText";
import { ILink } from "src/ui/ILink";

const ErrorPage: NextPage = () => {
  return (
    <MainLayout title="Page not found">
      <Container containerStyles={containerStyles}>
        <IText containerStyles={textStyles}>Oops.. Page not found!</IText>
        <ILink url="/" isButton containerStyles={linkStyles}>
          Go back
        </ILink>
      </Container>
    </MainLayout>
  );
};

export default ErrorPage;

const containerStyles = css`
  padding: 30px 0;
`;

const textStyles = css`
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 20px;
`;

const linkStyles = css`
  display: inline-block;
`;
