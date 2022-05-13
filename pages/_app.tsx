import "src/styles/fonts.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import GlobalStyle from "src/styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "src/store/store";
import { injectStore } from "src/services/apiClient";

injectStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </Provider>
  );
}

export default MyApp;
