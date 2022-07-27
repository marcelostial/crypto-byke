import * as React from "react";
import BlogCard from "./BlogCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("[ Molecule - BlogCard ]", () => {
  const title = "Text Paragraph";

  // test if component renders with title
  test("[ BlogCard ] renders with title", () => {
    render(<BlogCard title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
