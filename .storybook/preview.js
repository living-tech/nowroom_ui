import "react-datepicker/dist/react-datepicker.css";
import "../src/styles/globals.css";

import "../src/i18n";

import * as React from "react";
import { addDecorator } from "@storybook/react";
import { RouterContext } from  'next/dist/next-server/lib/router-context';
import { materialUiTheme } from "../src"
import { ThemeProvider } from "@material-ui/core/styles";

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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
