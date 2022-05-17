import Head from "next/head";
import React from "react";

import Container from "../Container/Container";
import { Footer } from "../Footer";
import { Header } from "../Header";

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

interface MainLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export default MainLayout;
