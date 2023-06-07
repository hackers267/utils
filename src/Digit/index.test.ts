import { Digit } from "./index";

describe("Digit add", () => {
  it("should add two digits", () => {
    const digit1 = Digit.new(1);
    const digit2 = Digit.new(2);
    const result = digit1.add(digit2);
    expect(result.value).toBe(3);
  });

  it("should add two digits with fractional digits", () => {
    const digit1 = Digit.new(0.1);
    const digit2 = Digit.new(0.2);
    const result = digit1.add(digit2);
    expect(result.value).toBe(0.3);
  });
});

describe("Digit static", () => {
  it("should create a new Digit object which value is 1", () => {
    const digit = Digit.one();
    expect(digit).toBeInstanceOf(Digit);
    expect(digit.value).toBe(1);
  });

  it("should create a new Digit object which value is 0", () => {
    const digit = Digit.zero();
    expect(digit).toBeInstanceOf(Digit);
    expect(digit.value).toBe(0);
  });
});

describe("Digit subtract", () => {
  it("should subtract two digits", () => {
    const digit1 = Digit.new(1);
    const digit2 = Digit.new(2);
    const result = digit1.subtract(digit2);
    expect(result.value).toBe(-1);
  });
});

describe("Digit multiply", () => {
  it("should multiply two digits", () => {
    const digit1 = Digit.new(1);
    const digit2 = Digit.new(2);
    const result = digit1.multiply(digit2);
    expect(result.value).toBe(2);
  });
});

describe("Digit divide", () => {
  it("should divide two digits", () => {
    const digit1 = Digit.new(1);
    const digit2 = Digit.new(2);
    const result = digit1.divide(digit2);
    expect(result.value).toBe(0.5);
  });
});

describe("Digit toString", () => {
  it("should return a string representation of a digit", () => {
    const digit = Digit.new(1);
    const result = digit.toString();
    expect(result).toBe("1");
  });
});

describe("Digit equals", () => {
  it("should return true if two digits are equal", () => {
    const digit1 = Digit.new(1);
    const digit2 = Digit.new(1);
    const result = digit1.equals(digit2);
    expect(result).toBe(true);
  });
  it("should return false if two digits are not equal", () => {
    const digit1 = Digit.new(1);
    const digit2 = Digit.new(2);
    const result = digit1.equals(digit2);
    expect(result).toBe(false);
  });
});

describe("format", () => {
  it("should format a digit", () => {
    const digit = Digit.new(1);
    const result = digit.format({});
    expect(result).toBe("1.00");
  });

  it("should format a digit with fractional digits", () => {
    const digit = Digit.new(0.1);
    const result = digit.format({ precision: 3 });
    expect(result).toBe("0.100");
  });

  it("should format a digit with unit", () => {
    const digit = Digit.new(1);
    const result = digit.format({ unit: "km" });
    expect(result).toBe("1.00km");
  });

  it("should format a digit with precision and unit", () => {
    const digit = Digit.new(1);
    const result = digit.format({ precision: 3, unit: "km" });
    expect(result).toBe("1.000km");
  });
});

describe("toPercent", () => {
  it("should return a percent representation of a digit", () => {
    const digit = Digit.new(0.01);
    const result = digit.toPercent();
    expect(result).toBe("1%");
  });

  it("should return a percent representation of a digit with fractional digits", () => {
    const digit = Digit.new(0.1);
    const result = digit.toPercent(2);
    expect(result).toBe("10.00%");
  });

  it("should return a percent representation of a digit which fractional is more", () => {
    const digit = Digit.new(0.23456);
    const result = digit.toPercent(2);
    expect(result).toBe("23.46%");
  });
});
