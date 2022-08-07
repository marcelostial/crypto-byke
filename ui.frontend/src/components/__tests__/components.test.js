import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import * as Components from "..";

describe("[Components]", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory({ initialEntries: ["/home"] });

  for (let component in Components) {
    it(`${component} renders without problems`, () => {
      const Current = Components[component];

      render(
        <Router history={history}>
          <Current />
        </Router>,
        div
      );
    });
  }
});
