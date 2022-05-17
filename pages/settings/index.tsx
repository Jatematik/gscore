import { NextPage } from "next";
import React from "react";
import styled, { css } from "styled-components";

import { MainLayout } from "src/layouts/MainLayout";
import { ITitle } from "src/ui/ITitle";
import { Tabs } from "src/components/Tabs";
import { PersonalInfoForm } from "src/components/PersonalInfoForm";
import { ChangePasswordForm } from "src/components/ChangePasswordForm";
import Container from "src/layouts/Container/Container";

const SettingsPage: NextPage = () => {
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

const containerStyles = css`
  padding: 32px 0px;
`;

const titleStyles = css`
  text-align: start;
`;
