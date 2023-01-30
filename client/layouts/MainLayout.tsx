import Navbar from "components/Navbar";
import React from "react";
import Container from "@mui/material/Container";
import Player from "components/Player";
import Head from "next/head";

interface MainLayoutProps {
  title?: string;
  despription?: string;
  keywords?: string;
}

const MainLayout: React.FC 
= ({ 
      children, 
      title,
      despription, 
      keywords,
  }) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta name="description" content={`Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` + despription} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "Музыка, треки, артисты"} />
        <meta name="viewport" content="width-device-width, initial-scale=1"/>  
      </Head>
      <Navbar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
