import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.png" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
