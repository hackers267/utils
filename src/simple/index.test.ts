import { isEven, isOdd } from "./index";

describe("isOdd", () => {
  it("should be true", () => {
    const n: number = 3;
    const result = isOdd(n);
    expect(result).toBeTruthy();
  });

  it("4 should be false", () => {
    expect(isOdd(4)).toBeFalsy();
  });

  it("3.1 should be false", () => {
    expect(isOdd(3.1)).toBeFalsy();
  });
});

describe("isEven", () => {
  it("should be true", () => {
    expect(isEven(4)).toBeTruthy();
  });

  it("3 should be false", () => {
    expect(isEven(3)).toBeFalsy();
  });

  it("4.2 should be false", () => {
    expect(isEven(4.2)).toBeFalsy();
  });
});
