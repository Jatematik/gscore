import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { css } from "styled-components";
import * as cookie from "cookie";

import Container from "src/layouts/Container/Container";
import { MainLayout } from "src/layouts/MainLayout";
import { ISwiper } from "src/ui/ISwiper";
import { ITitle } from "src/ui/ITitle";
import { IButton } from "src/ui/IButton";
import { CodeItem } from "src/components/CodeItem";
import { routes } from "src/types/routes";
import { useAppSelector } from "src/store/hooks";
import { selectors } from "src/store/ducks";
import { apiRequests } from "src/services/apiFunctions";
import { SubscribeCodeProps, SubscribeProps } from "src/types";

const Subscriptions: NextPage = () => {
  const router = useRouter();
  const token = useAppSelector(selectors.user.selectToken);
  const [subscribes, setSubscribes] = useState<SubscribeProps[]>([]);
  const [cardCodes, setCardCodes] = useState<SubscribeCodeProps[]>([]);
  const codes = useAppSelector(selectors.codes.selectCodes);

  useEffect(() => {
    setCardCodes(codes);
  }, [codes]);

  useEffect(() => {
    if (!token) {
      router.push(routes.LOGIN);
    }
  }, [token, router]);

  useEffect(() => {
    apiRequests.products
      .getSubscribes()
      .then((res) => {
        setSubscribes(res.data);
      })
      .catch((e) => console.warn(e));
  }, []);

  return (
    <MainLayout title="Gscore | Subscriptions">
      <Container containerStyles={containerStyles}>
        <ITitle containerStyles={titleStyles}>My subscribtions</ITitle>
        <IButton containerStyles={buttonStyles}>Upgrade</IButton>
      </Container>
      <ISwiper slides={subscribes} />
      <Container>
        {cardCodes.length > 0 &&
          cardCodes.map((item) => (
            <CodeItem key={item.id.toString()} item={item} />
          ))}
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
