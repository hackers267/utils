import { Distance } from "./index";

describe("Distance", function () {
  it("default unit to add", function () {
    const a = Distance.new(12);
    const b = Distance.new(13);
    const result = a.add(b);
    expect(result.toString()).toBe("25.00m");
  });

  it("the same unit be not default", function () {
    const a = Distance.new(12, "cm");
    const b = Distance.new(13, "cm");
    const result = a.add(b);
    expect(result.toString()).toBe("25.00cm");
  });

  it("different unit be not default", function () {
    const a = Distance.new(12, "cm");
    const b = Distance.new(13, "mm");
    const result = a.add(b);
    expect(result.toString()).toBe("13.30cm");
  });
});

describe("distance sub", function () {
  it("default unit to sub", function () {
    const a = Distance.new(12);
    const b = Distance.new(13);
    const result = a.sub(b);
    expect(result.toString()).toBe("-1.00m");
  });

  it("the same unit be not default", function () {
    const a = Distance.new(12, "cm");
    const b = Distance.new(13, "cm");
    const result = a.sub(b);
    expect(result.toString()).toBe("-1.00cm");
  });

  it("different unit be not default", function () {
    const a = Distance.new(12, "cm");
    const b = Distance.new(13, "mm");
    const result = a.sub(b);
    expect(result.toString()).toBe("10.70cm");
  });
});
