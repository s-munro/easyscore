import React from "react";
import ReactDOM from "react-dom";

import "font-awesome/css/font-awesome.min.css";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./store/reducers";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./custom.scss";
import App from "./App";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js";

Chart.plugins.unregister(ChartDataLabels);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

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
