import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { css } from "styled-components";
import * as cookie from "cookie";

import Container from "src/layouts/Container/Container";
import { MainLayout } from "src/layouts/MainLayout";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ITitle } from "src/ui/ITitle";
import { IButton } from "src/ui/IButton";
import { routes } from "src/types/routes";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { selectors, thunks } from "src/store/ducks";
import { IText } from "src/ui/IText";
import { ModalUpgrade } from "src/components/ModalUpgrade";
import { NoContentSubscribe } from "src/ui/NoContentSubscribe";
import { CodeForm } from "src/components/CodeForm";

const Subscriptions: NextPage = () => {
  const router = useRouter();

  const [openUpgrade, setOpenUpgrade] = useState<boolean>(false);
  const [subscribeId, setSubscribeId] = useState<number>(0);

  const token = useAppSelector(selectors.user.selectToken);
  const subscribes = useAppSelector(selectors.subscribes.selectSubscribes);
  const loading = useAppSelector(selectors.subscribes.selectLoading);

  const dispatch = useAppDispatch();

  const handleUpgrade = () => setOpenUpgrade(!openUpgrade);

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
      {loading === "pending" ? (
        <Container containerStyles={noSubscribeContainerStyles}>
          <IText containerStyles={noSubscribeSubText}>Loading...</IText>
        </Container>
      ) : (
        <>
          {subscribes.length > 0 ? (
            <>
              <Container containerStyles={containerStyles}>
                <ITitle containerStyles={titleStyles}>My subscribtions</ITitle>
                <IButton containerStyles={buttonStyles} onClick={handleUpgrade}>
                  Upgrade
                </IButton>
              </Container>
              <SwiperSlider
                slides={subscribes}
                setSubscribeId={setSubscribeId}
              />
              <CodeForm />
            </>
          ) : (
            <NoContentSubscribe />
          )}
        </>
      )}
      <ModalUpgrade
        isOpen={openUpgrade}
        onRequestClose={handleUpgrade}
        subscribeId={subscribeId}
      />
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

const noSubscribeContainerStyles = css`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 430px;
`;

const noSubscribeSubText = css`
  margin-bottom: 32px;
  text-align: center;
`;
