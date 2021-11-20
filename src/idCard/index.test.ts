import { calcBirthday, calcSex } from "./index";

describe("calcBirthday", () => {
  it("should be true", () => {
    const no: string = "110225196403026127";
    const actual: string = "19640302";
    const result = calcBirthday(no);
    expect(actual).toBe(result);
  });

  it("should be true", () => {
    const no: string = "5101031965020834352";
    const actual: string = "19650208";
    const result = calcBirthday(no);
    expect(result).toBe(actual);
  });
});

describe("calcSex", () => {
  it("should be 女", () => {
    const no: string = "110225196403026127";
    const actual: string = "女";
    const result = calcSex(no);
    expect(result).toBe(actual);
  });

  it("should be 男", () => {
    const no: string = "5101031965020834352";
    const actual: string = "男";
    const result = calcSex(no);
    expect(result).toBe(actual);
  });
});
