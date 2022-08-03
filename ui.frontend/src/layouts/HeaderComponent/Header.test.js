import { render } from "react-dom";
import Header from "./Header";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

it("[Components - Header] renders without problems", () => {
  const div = document.createElement("div");
  const history = createBrowserHistory();
  render(
    <Router history={history}>
      <Header  />
    </Router>,
    div
  )
});
