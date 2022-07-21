import { render } from "react-dom";
import App from "./App";

it("[App] renders without problems", () => {
  const div = document.createElement("div");
  render(<App />, div);
});
