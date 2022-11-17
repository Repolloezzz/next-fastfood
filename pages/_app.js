import "../styles/globals.scss";
import "../styles/abstract/_base.scss";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
