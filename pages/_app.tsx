import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

import Header from "../components/header/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <SessionProvider session={pageProps.session}>
            {!router.pathname.includes("search") && <Header />}
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
