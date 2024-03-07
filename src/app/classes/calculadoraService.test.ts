import { expect, describe, it } from "vitest";

import { CalculadoraService } from "./CalculadoraService";

describe("CalculadoraService test", () => {
  const sut = new CalculadoraService();

  it("should return adds 1 + 4 to equal 5", () => {
    expect(sut.calcular(1, 4)).toEqual(5);
  });
});
