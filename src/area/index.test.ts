import { Area } from "./index";

describe("area add", () => {
  test("default unit to add", () => {
    const a = Area.new(12);
    const b = Area.new(13);
    const result = a.add(b);
    expect(result.toString()).toBe("25.00m²");
  });

  test("the same unit be not default", () => {
    const a = Area.new(12, "cm2");
    const b = Area.new(13, "cm2");
    const result = a.add(b);
    expect(result.toString()).toBe("25.00cm²");
  });

  test("different unit be not default", () => {
    const a = Area.new(12, "cm2");
    const b = Area.new(13, "mm2");
    const result = a.add(b);
    expect(result.toString()).toBe("12.13cm²");
  });
});

describe("area sub", () => {
  test("default unit to sub", () => {
    const a = Area.new(12);
    const b = Area.new(13);
    const result = a.sub(b);
    expect(result.toString()).toBe("-1.00m²");
  });
  test("the same unit be not default", () => {
    const a = Area.new(12, "cm2");
    const b = Area.new(13, "cm2");
    const result = a.sub(b);
    expect(result.toString()).toBe("-1.00cm²");
  });
  test("different unit be not default", () => {
    const a = Area.new(12, "cm2");
    const b = Area.new(13, "mm2");
    const result = a.sub(b);
    expect(result.toString()).toBe("11.87cm²");
  });
});
