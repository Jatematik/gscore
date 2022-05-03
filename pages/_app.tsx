// import 'src/styles/globals.css';
import 'src/styles/fonts.css';
import type { AppProps } from 'next/app';
import GlobalStyle from 'src/styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
