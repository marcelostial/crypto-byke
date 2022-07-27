import * as React from "react";
import Button from "./Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("[ Atom - Button ]", () => {
  render(
    <Button
      label="TestLabel"
      type="primary"
      submit
      icon="arrow-right"
      alignIcon="right"
    />
  );
  const button = screen.getByTestId("cmp-button");

  // Testa se o componente Button renderiza corretamente
  test("[Button] - Should render a default button", () => {
    expect(button).toBeInTheDocument();
  });
});
