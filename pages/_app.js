import "../styles/globals.scss";
import "../styles/abstract/_base.scss";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimun-scale=1, maximun-scale=1, interactive-widget=overlays-content, user-scalable=no"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
