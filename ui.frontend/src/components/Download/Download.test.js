import { render } from "react-dom";
import Download from "./Download";

it("[Components - Download] renders without problems", () => {
  const div = document.createElement("div");
  render(<Download />, div);
});
