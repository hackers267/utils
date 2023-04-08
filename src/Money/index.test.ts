import { Money } from "./index";

describe("Money Add", function () {
  it("should add two Money objects", function () {
    const money1 = Money.new(3.45);
    const money2 = Money.new(1.23);
    const money3 = money1.add(money2);
    expect(money3.toString()).toBe("4.68");
  });
});

describe("Money Sub", function () {
  it("should subtract two Money objects", function () {
    const money1 = Money.new(3.45);
    const money2 = Money.new(1.23);
    const money3 = money1.sub(money2);
    expect(money3.toString()).toBe("2.22");
  });
});

describe("Money Mul", function () {
  it("should mul Money with factor", function () {
    const money1 = Money.new(1.1);
    const result = money1.mul(2.4);
    expect(result.toString()).toBe("2.64");
  });
});

describe("Money Div", function () {
  it("should div Money with factor", function () {
    const money1 = Money.new(8.4);
    const result = money1.div(1.6);
    expect(result.toString()).toBe("5.25");
  });
});

describe("toChinese", function () {
  it("should convert to Chinese", function () {
    const money = Money.new(3.45);
    const result = money.toChinese();
    expect(result).toBe("¥3.45");
  });

  it("should convert to Chinese with precision", function () {
    const money = Money.new(3.45);
    const result = money.toChinese(3);
    expect(result).toBe("¥3.450");
  });
});
