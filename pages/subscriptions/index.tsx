import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import * as cookie from "cookie";

import Container from "src/layouts/Container/Container";
import { MainLayout } from "src/layouts/MainLayout";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ITitle } from "src/ui/ITitle";
import { IButton } from "src/ui/IButton";
import { CodeItem } from "src/components/CodeItem";
import { routes } from "src/types/routes";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { selectors, thunks } from "src/store/ducks";
import { IText } from "src/ui/IText";
import { IToast } from "src/ui/IToast";

const Subscriptions: NextPage = () => {
  const router = useRouter();

  const [upgrade, setUpgrade] = useState<boolean>(true);

  const token = useAppSelector(selectors.user.selectToken);
  const subscribes = useAppSelector(selectors.subscribes.selectSubscribes);
  const codes = useAppSelector(selectors.codes.selectCodes);
  const subscribeCardId = useAppSelector(selectors.codes.selectId);

  const dispatch = useAppDispatch();

  const handleUpgrade = () => setUpgrade(false);

  useEffect(() => {
    if (!token) {
      router.push(routes.LOGIN);
    }
  }, [token, router]);

  useEffect(() => {
    dispatch(thunks.subscribes.asyncGetSubscribes({}));
  }, [dispatch]);

  return (
    <MainLayout title="Gscore | Subscriptions">
      <Container containerStyles={containerStyles}>
        <ITitle containerStyles={titleStyles}>My subscribtions</ITitle>
        <IButton containerStyles={buttonStyles} onClick={handleUpgrade}>
          Upgrade
        </IButton>
      </Container>
      {subscribes.length > 0 && <SwiperSlider slides={subscribes} />}
      <Container>
        {codes.length > 0 && (
          <>
            {codes.map((item) => (
              <CodeItem
                key={item.id.toString()}
                item={item}
                subscribeCardId={subscribeCardId}
                isActive={upgrade}
              />
            ))}
            <ConfirmContainer>
              <IText containerStyles={confirmStyles}>
                Select the domains you want to keep
              </IText>
              <IButton>Confirm</IButton>
            </ConfirmContainer>
          </>
        )}
        <IToast />
      </Container>
    </MainLayout>
  );
};

export default Subscriptions;

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

const ConfirmContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const titleStyles = css`
  text-align: start;
`;

const buttonStyles = css`
  min-width: 152px;
`;

const containerStyles = css`
  margin: 32px auto;
  display: flex;
  justify-content: space-between;
`;

const confirmStyles = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
`;
