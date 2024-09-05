"use client";

import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider } from "@mui/material/styles";
import NavigationScroll from "layout/NavigationScroll";
import { useAppSelector } from "hooks";
import themes from "themes";
import { persistor, RootState, store } from "store";
import MainLayout from "layout/MainLayout";
import "@public/assets/scss/style.scss";
import { PersistGate } from "redux-persist/integration/react";

const ProvideWapped = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const custom = useAppSelector(
    (state: RootState) => state.customizationReducer
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(custom)}>
        <CssBaseline />
        <NavigationScroll>
          <MainLayout>{children}</MainLayout>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export const LayoutProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProvideWapped>{children}</ProvideWapped>
      </PersistGate>
    </Provider>
  );
};
