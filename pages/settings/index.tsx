import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { css } from "styled-components";
import * as cookie from "cookie";

import { MainLayout } from "src/layouts/MainLayout";
import { ITitle } from "src/ui/ITitle";
import { Tabs } from "src/components/Tabs";
import { PersonalInfoForm } from "src/components/PersonalInfoForm";
import { ChangePasswordForm } from "src/components/ChangePasswordForm";
import Container from "src/layouts/Container/Container";
import { useAppSelector } from "src/store/hooks";
import { selectors } from "src/store/ducks";
import { routes } from "src/types/routes";

const SettingsPage: NextPage = () => {
  const router = useRouter();
  const token = useAppSelector(selectors.user.selectToken);

  useEffect(() => {
    if (!token) {
      router.push(routes.LOGIN);
    }
  }, [token, router]);

  return (
    <MainLayout title="Gscore | Setting">
      <Container containerStyles={containerStyles}>
        <ITitle containerStyles={titleStyles}>Settings</ITitle>
        <Tabs
          tabs={[
            {
              title: "Personal info",
              children: <PersonalInfoForm />,
            },
            {
              title: "Change password",
              children: <ChangePasswordForm />,
            },
          ]}
        />
      </Container>
    </MainLayout>
  );
};

export default SettingsPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.headers.cookie) {
    const parsedCookies = cookie.parse(req.headers.cookie);

    if (parsedCookies.token === "") {
      return {
        redirect: {
          destination: routes.LOGIN,
          statusCode: 302,
        },
      };
    }
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        destination: routes.LOGIN,
        statusCode: 302,
      },
    };
  }
};

const containerStyles = css`
  padding: 32px 0px;
`;

const titleStyles = css`
  text-align: start;

  @media (max-width: 576px) {
    font-size: 28px;
    line-height: 40px;
  }
`;
