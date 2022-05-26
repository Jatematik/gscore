import "src/styles/fonts.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "src/styles/swiper-slider.css";
import type { AppProps } from "next/app";
import GlobalStyle from "src/styles/GlobalStyles";
import { Provider } from "react-redux";
import { debounce } from "debounce";

import { store } from "src/store/store";
import { injectStore } from "src/services/apiClient";
import { saveState } from "src/store/browser-storage";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

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
