import { render } from "react-dom";
import RichText from "./RichText";

it("[Components - RichText] renders without problems", () => {
  const div = document.createElement("div");
  render(<RichText />, div);
});
