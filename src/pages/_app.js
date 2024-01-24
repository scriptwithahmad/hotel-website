import "@/styles/globals.css";
import Format from "@/components/Format";
import { QueryClientProvider, QueryClient } from "react-query";
import Context from "@/Context";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <Context>
        <Format>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Format>
      </Context>
    </>
  );
}
