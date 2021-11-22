import { calcBirthday, calcSex, verity } from "./index";

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

describe("verity", () => {
  it("should be true", () => {
    const no: string = "34052419800101001X";
    const result = verity(no);
    expect(result).toBeTruthy();
  });

  it("should be false", () => {
    const no: string = "340524198001010010";
    const result = verity(no);
    expect(result).toBeFalsy();
  });

  it("should be false lt 18 bit", () => {
    const no: string = "34052419800101001";
    const result = verity(no);
    expect(result).toBeFalsy();
  });

  it("should be false wrong style", () => {
    const no: string = "34052419800101001Y";
    const result = verity(no);
    expect(result).toBeFalsy();
  });
});
