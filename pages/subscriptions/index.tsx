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
import CrossIcon from "src/assets/icons/CrossIcon";
import { ILink } from "src/ui/ILink";

const Subscriptions: NextPage = () => {
  const router = useRouter();

  const [upgrade, setUpgrade] = useState<boolean>(true);

  const token = useAppSelector(selectors.user.selectToken);
  const subscribes = useAppSelector(selectors.subscribes.selectSubscribes);
  const codes = useAppSelector(selectors.codes.selectCodes);
  const subscribeCardId = useAppSelector(selectors.codes.selectId);
  const loading = useAppSelector(selectors.subscribes.selectLoading);

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
              <SwiperSlider slides={subscribes} />
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
            </>
          ) : (
            <Container containerStyles={noSubscribeContainerStyles}>
              <CrossIcon />
              <IText containerStyles={noSubscribeText}>
                No active subscriptions
              </IText>
              <IText containerStyles={noSubscribeSubText}>
                You can subscribe right now by clicking on the button below
              </IText>
              <ILink
                url="/"
                isButton
                btnType="primary"
                containerStyles={noSubscribeLink}
              >
                Get Gscore
              </ILink>
            </Container>
          )}
        </>
      )}
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

const noSubscribeContainerStyles = css`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 430px;
`;

const noSubscribeText = css`
  margin: 24px 0 8px;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
`;

const noSubscribeSubText = css`
  margin-bottom: 32px;
  text-align: center;
`;

const noSubscribeLink = css`
  min-width: 164px;
`;
