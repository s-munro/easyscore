import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js";

import { store } from "./store/store";
import "./index.css";
import "./custom.scss";
import App from "./App";

Chart.plugins.unregister(ChartDataLabels);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b32727",
      main: "#b32727",
      dark: "#b32727",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
