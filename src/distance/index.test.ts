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

describe("distance mul", function () {
  it("mul", function () {
    const a = Distance.new(12);
    const result = a.mul(12);
    expect(result.toString()).toBe("144.00m");
  });
});

describe("distance div", function () {
  it("div", function () {
    const a = Distance.new(12);
    const result = a.div(2);
    expect(result.toString()).toBe("6.00m");
  });
});

describe("toM", function () {
  it("should cm toMeasure", function () {
    const a = Distance.new(12, "cm");
    const b = a.toM();
    expect(b.toString()).toBe("0.12m");
  });

  it("should mm toMeasure", function () {
    const a = Distance.new(120, "mm");
    const b = a.toM();
    expect(b.toString()).toBe("0.12m");
  });

  it("should km toMeasure", function () {
    const a = Distance.new(12, "km");
    const b = a.toM();
    expect(b.toString()).toBe("12000.00m");
  });

  it("should dm toMeasure", function () {
    const a = Distance.new(12, "dm");
    const b = a.toM();
    expect(b.toString()).toBe("1.20m");
  });
});

describe("toMm", function () {
  it("should cm toMm", function () {
    const a = Distance.new(12, "cm");
    const b = a.toMm();
    expect(b.toString()).toBe("120.00mm");
  });

  it("should m toMm", function () {
    const a = Distance.new(12, "m");
    const b = a.toMm();
    expect(b.toString()).toBe("12000.00mm");
  });

  it("should dm toMm", function () {
    const a = Distance.new(12, "dm");
    const b = a.toMm();
    expect(b.toString()).toBe("1200.00mm");
  });

  it("should km toMm", function () {
    const a = Distance.new(12, "km");
    const b = a.toMm();
    expect(b.toString()).toBe("12000000.00mm");
  });
});

describe("toCm", function () {
  it("should mm to cm", function () {
    const a = Distance.new(12, "mm");
    const b = a.toCm();
    expect(b.toString()).toBe("1.20cm");
  });

  it("should dm to cm", function () {
    const a = Distance.new(12, "dm");
    const b = a.toCm();
    expect(b.toString()).toBe("120.00cm");
  });

  it("should m to cm", function () {
    const a = Distance.new(12, "m");
    const b = a.toCm();
    expect(b.toString()).toBe("1200.00cm");
  });

  it("should km to cm", function () {
    const a = Distance.new(12, "km");
    const b = a.toCm();
    expect(b.toString()).toBe("1200000.00cm");
  });
});

describe("toDm", function () {
  it("should mm to dm", function () {
    const a = Distance.new(12, "mm");
    const b = a.toDm();
    expect(b.toString()).toBe("0.12dm");
  });

  it("should cm to dm", function () {
    const a = Distance.new(12, "cm");
    const b = a.toDm();
    expect(b.toString()).toBe("1.20dm");
  });

  it("should m to dm", function () {
    const a = Distance.new(12, "m");
    const b = a.toDm();
    expect(b.toString()).toBe("120.00dm");
  });

  it("should km to dm", function () {
    const a = Distance.new(12, "km");
    const b = a.toDm();
    expect(b.toString()).toBe("120000.00dm");
  });
});

describe("toKm", function () {
  it("should mm to km", function () {
    const a = Distance.new(12000000, "mm");
    const b = a.toKm();
    expect(b.toString()).toBe("12.00km");
  });

  it("should cm to km", function () {
    const a = Distance.new(1200000, "cm");
    const b = a.toKm();
    expect(b.toString()).toBe("12.00km");
  });

  it("should dm to km", function () {
    const a = Distance.new(120000, "dm");
    const b = a.toKm();
    expect(b.toString()).toBe("12.00km");
  });

  it("should m to km", function () {
    const a = Distance.new(12000, "m");
    const b = a.toKm();
    expect(b.toString()).toBe("12.00km");
  });
});

describe("format", function () {
  it("should with default format", function () {
    const a = Distance.new(12);
    const result = a.format({});
    expect(result).toBe("12.00m");
  });

  it("should with precision format", function () {
    const a = Distance.new(12);
    const result = a.format({ precision: 3 });
    expect(result).toBe("12.000m");
  });

  it("should with no unit", function () {
    const a = Distance.new(12);
    const result = a.format({ unit: false });
    expect(result).toBe("12.00");
  });

  it("should with precision and no unit", function () {
    const a = Distance.new(12);
    const result = a.format({ precision: 3, unit: false });
    expect(result).toBe("12.000");
  });
});

describe("Distance multiple", function () {
  it("should with default format", function () {
    const a = Distance.new(12);
    const result = a.multiply(a);
    expect(result.toString()).toBe("144.00m²");
  });

  it("should with different format", function () {
    const a = Distance.new(12, "cm");
    const b = Distance.new(12);
    const result = a.multiply(b);
    expect(result.toString()).toBe("14400.00cm²");
  });
});
