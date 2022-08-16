import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";
import "custom-event-polyfill";

import React from "react";
import App from "./App";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import LocalDevModelClient from "./routing/LocalDevModelClient";
import { Constants, ModelManager } from "@adobe/aem-spa-page-model-manager";

import TagManager from "react-gtm-module";
import ReactGA from "react-ga";

import "./import-components";
import "./styles/globals.scss";

const modelManagerOptions = {};
if (process.env.REACT_APP_PROXY_ENABLED) {
  modelManagerOptions.modelClient = new LocalDevModelClient(
    process.env.REACT_APP_API_HOST
  );
}

const tagManagerArgs = {
  gtmId: "GTM-5ZMH2GT",
};

const TRACKING_ID = "UA-96866913-1";

TagManager.initialize(tagManagerArgs);
ReactGA.initialize(TRACKING_ID);
const routeChange = new CustomEvent("route-change");

const renderApp = () => {
  ModelManager.initialize(modelManagerOptions).then((pageModel) => {
    const history = createBrowserHistory();

    history.listen(() => {
      window.dispatchEvent(routeChange);
      window.scrollTo(0, 0);
      scrollToHash();
    });

    render(
      <Router history={history}>
        <App
          history={history}
          cqChildren={pageModel[Constants.CHILDREN_PROP]}
          cqItems={pageModel[Constants.ITEMS_PROP]}
          cqItemsOrder={pageModel[Constants.ITEMS_ORDER_PROP]}
          cqPath={pageModel[Constants.PATH_PROP]}
          locationPathname={window.location.pathname}
        />
      </Router>,
      document.getElementById("spa-root")
    );
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});

function scrollToHash() {
  const { hash } = window.location;

  if (hash) {
    const element = document.querySelector(hash);
    if (element) element.scrollIntoView();
  }
}
