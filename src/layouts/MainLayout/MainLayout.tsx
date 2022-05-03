import Head from 'next/head';
import React from 'react';
import Container from 'src/layouts/Container/Container';
import styled from 'styled-components';

import { Footer } from '../Footer';
import { Header } from '../Header';

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

interface MainLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export default MainLayout;
