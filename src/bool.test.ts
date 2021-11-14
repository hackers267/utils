import { isFalse, isTrue } from "./bool";

describe("isFalse", function () {
  it("should be true", function () {
    const array = [false, "", 0, null, undefined];
    array.forEach((value) => {
      expect(isFalse(value)).toBeTruthy();
    });
  });
  it("should be false", function () {
    const array = [true, "1", 1, [], {}, Symbol("0")];
    array.forEach((value) => {
      expect(isFalse(value)).toBeFalsy();
    });
  });
});

describe("isTrue", function () {
  it("should be true", function () {
    const array = [1, "2", [], {}, Symbol("0"), true];
    array.forEach((value) => {
      expect(isTrue(value)).toBeTruthy();
    });
  });
  it("should be false", function () {
    const array = [0, "", undefined, null, false];
    array.forEach((value) => {
      expect(isTrue(value)).toBeFalsy();
    });
  });
});
