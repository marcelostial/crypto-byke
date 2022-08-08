import { render } from "react-dom";
import DropDown from "./DropDown";

it("[Components - DropDown] renders without problems", () => {
  const div = document.createElement("div");
  render(<DropDown />, div);
});
