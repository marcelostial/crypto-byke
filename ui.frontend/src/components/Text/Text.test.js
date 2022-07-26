import { render } from "react-dom";
import Text from "./Text";

it("[Components- Text] renders without problems", () => {
  const div = document.createElement("div");
  render(<Text />, div);
});
