import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import store from './redux/store'; // Import the store from the new location
import { Provider } from 'react-redux';
import "./global.css";

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={chakraTheme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </CacheProvider>
    </BrowserRouter>
);
