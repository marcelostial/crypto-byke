import { render } from "react-dom";
import SearchBar from "./SearchBar";

it("[Components - SearchBar] renders without problems", () => {
  const div = document.createElement("div");
  render(<SearchBar />, div);
});
