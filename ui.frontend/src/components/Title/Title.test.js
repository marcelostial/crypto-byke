import { render } from "react-dom";
import Title from "./Title";

it("[Components - Title] renders without problems", () => {
  const div = document.createElement("div");
  render(<Title />, div);
});
