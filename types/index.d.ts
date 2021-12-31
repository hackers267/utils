declare function isTrue(value: any): boolean;

declare const isFalse: (value: any) => boolean;

declare function whenTrue(fn: () => void): (obj: any) => any;

declare function whenFalse(fn: () => void): (obj: any) => any;

declare function calcBirthday(no: string): string;

/**
 * 根据身份证计算性别
 * @param no
 * @returns {string}
 */
declare function calcSex(no: string): "男" | "女";

/**
 * 校验身份证
 * @param no
 * @returns {boolean}
 */
declare function verity(no: string): boolean;

declare function isOdd(n: number): boolean;

declare function isEven(n: number): boolean;

export {
  calcBirthday,
  calcSex,
  isEven,
  isFalse,
  isOdd,
  isTrue,
  verity,
  whenFalse,
  whenTrue,
};
