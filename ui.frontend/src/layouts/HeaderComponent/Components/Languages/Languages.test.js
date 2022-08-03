import { render } from "react-dom";
import Languages from "./Languages";

it("[Components - Languages] renders without problems", () => {
  const div = document.createElement("div");
  render(<Languages />, div);
});
