import { render } from "react-dom";
import { describe, test } from "vitest";

import { Calculator } from "./calculator";

describe("Calculator", () => {
  test("should clear numbers field", () => {
    render(<Calculator />);
  });
});
