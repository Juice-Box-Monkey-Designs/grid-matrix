import React from "react";
import { render } from "@testing-library/react";

import GridSection from "./GridSection";

describe("GridSection", () => {
  test("renders the GridSection component", () => {
    render(<GridSection cover={0} align={"bottom"} />);
  });
});
