import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { css, keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";
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
import { Loader } from "src/ui/Loader";
import { errorRequestMessage } from "src/services/toastFunctions";
import { IToast } from "src/ui/IToast";

const Subscriptions: NextPage = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({
    query: "(max-width: 576px)",
  });

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
    dispatch(thunks.subscribes.asyncGetSubscribes({}))
      .unwrap()
      .catch((e) => errorRequestMessage(e));
  }, [dispatch]);

  return (
    <MainLayout title="Gscore | Subscriptions">
      {loading === "pending" ? (
        <Container containerStyles={noSubscribeContainerStyles}>
          <IText containerStyles={noSubscribeSubText}>Loading</IText>
        </Container>
      ) : (
        <>
          {subscribes.length > 0 ? (
            <>
              <Container containerStyles={containerStyles}>
                <ITitle containerStyles={titleStyles}>My subscribtions</ITitle>
                <IButton
                  containerStyles={buttonStyles}
                  onClick={handleUpgrade}
                  btnType={isMobile ? "text" : "primary"}
                >
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
            <>
              <NoContentSubscribe />
              <IToast />
            </>
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

  @media (max-width: 576px) {
    min-width: auto;
  }
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

const loadAnim = keyframes`
  0% {
    content: ' ';
  }

  33% {
    content: '.';
  }

  66% {
    content: '..';
  }

  100% {
    content: '...';
  }
`;

const noSubscribeSubText = css`
  position: relative;
  margin-bottom: 32px;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 100%;
    display: inline-block;
    animation: ${loadAnim} 1.5s linear infinite;
  }
`;
