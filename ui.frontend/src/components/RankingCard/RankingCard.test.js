import { render } from "react-dom";
import RankingCard from "./RankingCard";

it("[Components - RankingCard] renders without problems", () => {
  const div = document.createElement("div");
  render(<RankingCard />, div);
});
