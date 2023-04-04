declare function isTrue(value: any): boolean;

declare const isFalse: (value: any) => boolean;

declare function whenTrue(fn: () => void): (a: any) => any;

declare function whenFalse(fn: () => void): (a: any) => any;

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

type Unit = "mm2" | "cm2" | "dm2" | "m2" | "km2";

declare class Area {
  readonly value: number;
  readonly unit: Unit;

  private constructor();

  static new(value: number, unit?: Unit): Area;

  toString(): string;

  /**
   * 两个面积相加
   * @param other 另一个面积对象
   * @returns 返回两个面积对象的和
   */
  add(other: Area): Area;

  /**
   * 两个面积相减
   * @param other 另一个面积对象
   * @returns 返回两个面积对象的差
   */
  sub(other: Area): Area;
}

export {
  Area,
  type Unit,
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
