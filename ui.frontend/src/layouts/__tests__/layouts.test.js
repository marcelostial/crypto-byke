import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import * as layouts from "..";

describe("[Layouts]", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory({ initialEntries: ["/home"] });

  for (let Layout in layouts) {
    it(`${Layout} renders without problems`, () => {
      const Current = layouts[Layout];

      render(
        <Router history={history}>
          <Current />
        </Router>,
        div
      );
    });
  }
});
