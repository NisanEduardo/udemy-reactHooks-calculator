import { expect, describe, it } from "vitest";

import { useCalculator } from "./CalculadoraService";

describe("CalculadoraService test", () => {
  const { calcular } = useCalculator();

  it("should must ensure that adds 1 + 4 to equal 5", () => {
    expect(calcular(1, 4, "+")).toEqual(5);
  });

  it("should must ensure that Subtraction 1 - 4 to equal -3", () => {
    expect(calcular(1, 4, "-")).toEqual(-3);
  });

  it("should must ensure that division 1 / 4 to equal 0.25", () => {
    expect(calcular(1, 4, "/")).toEqual(0.25);
  });

  it("should must ensure that Multiplication 2 * 4 to equal 8", () => {
    expect(calcular(2, 4, "*")).toEqual(8);
  });
});
