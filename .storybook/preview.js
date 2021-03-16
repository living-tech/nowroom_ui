import "react-datepicker/dist/react-datepicker.css";
// import "../src/components/atoms/InputDatePicker/InputDatePicker.css";
import "../src/styles/Globals.css";

import * as React from "react";
import { addDecorator } from "@storybook/react";
import { materialUiTheme } from "../src/libs/materialUi"
import { ThemeProvider } from "@material-ui/core/styles";

const withProvider = (storyFn) => {
  return (
    <ThemeProvider theme={materialUiTheme}>
      {storyFn()}
    </ThemeProvider>
  )
}

addDecorator(withProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
