import '../styles/globals.css';
import type { AppProps } from 'next/app';
declare global {
    interface Window {
        dataLayer: any;
    }
}
declare function MyApp({ Component, pageProps }: AppProps): JSX.Element;
export default MyApp;
