import { createMuiTheme } from "@material-ui/core/styles";

import { purple500 } from "../../constnats/colors";

export const materialUiTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple500,
    },
  },
  typography: {
    fontFamily: [
      "YakuHanJP_Noto",
      "Roboto",
      "Noto Sans JP",
      "Hiragino Sans",
      "Hiragino Kaku Gothic ProN",
      "Meiryo",
      "sans-serif",
    ].join(","),
    fontWeightMedium: 500,
    fontWeightRegular: 500,
  },
});
