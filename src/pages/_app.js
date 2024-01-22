import "@/styles/globals.css";
import Format from "@/components/Format";

import Context from "@/Context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Format>
          <Component {...pageProps} />
        </Format>
      </Context>
    </>
  );
}
