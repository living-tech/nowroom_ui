import "../src/styles/globals.css";

import * as React from "react";
import { addDecorator } from "@storybook/react";
import { RouterContext } from  'next/dist/shared/lib/router-context';
import { customViewports, materialUiTheme } from "../src"
import { ThemeProvider } from "@material-ui/core/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports, defaultViewport: 'iphoneX' },
};

const withProvider = (storyFn) => {
  return (
    <RouterContext.Provider value={{
      push: () => Promise.resolve(),
      replace: () => Promise.resolve(),
      prefetch: () => Promise.resolve()
    }}>
      <ThemeProvider theme={materialUiTheme}>
        {storyFn()}
      </ThemeProvider>
    </RouterContext.Provider>
  )
}

addDecorator(withProvider);
