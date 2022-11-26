import "../styles/globals.css";
import type { AppProps } from "next/app";
import en from "../components/lang/en.json";
import th from "../components/lang/th.json";
import tr from "../components/lang/tr.json";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
type Lang = "en" | "th" | "tr";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const messages = {
    en,
    th,
    tr,
  };

  return (
    <>
      <IntlProvider
        locale={locale as string}
        messages={messages[locale as Lang]}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}
