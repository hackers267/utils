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

type Unit$1 = "mm2" | "cm2" | "dm2" | "m2" | "km2";

declare class Area {
  readonly value: number;
  readonly unit: Unit$1;

  /**
   * The constructor function for the `Quantity` class.
   * Area对象的构造器。其接收两个参数，一个是Area对象的值，一个是Area对象的单位。如果没有指定单位，其默认为&quot;m2&quot; (平方米)。
   *
   *
   * @param value: - Area对象的值
   * @param unit: - Area对象的单位 @see Unit
   *
   * @return Area - Area对象
   *
   * @private
   */
  private constructor();

  /**
   *
   * 用于创建Area对象的静态方法，返回一个新的Area对象。其接收两个参数，一个是Area对象的值，一个是Area对象的单位。如果没有指定单位，其默认为&quot;m2&quot; (平方米)。
   *
   * @param value:  - Area对象的值
   * @param unit: - Area对象的单位 @see Unit
   *
   * @return Area - Area对象
   * @public
   */
  static new(value: number, unit?: Unit$1): Area;

  /**
   * Area的字符串表示
   *
   *
   * @returns String - 一个拥有2个小数点和单位的字符串
   * @public
   */
  toString(): string;

  /**
   * 两个面积相加
   * @param other 另一个面积对象
   * @returns 返回两个面积对象的和
   * @public
   */
  add(other: Area): Area;

  /**
   * 两个面积相减
   * @param other 另一个面积对象
   * @returns 返回两个面积对象的差
   * @public
   */
  sub(other: Area): Area;
}

type Unit = "mm" | "cm" | "dm" | "m" | "km";

interface Format {
  precision?: number;
  unit?: boolean;
}

declare class Distance {
  readonly value: number;
  readonly unit: Unit;
  /**
   * Distance对象的单位转换为指定单位
   *
   * @param unit - 指定单位
   *
   * @returns Distance - Distance对象
   *
   * @private
   */
  private readonly to;

  /**
   * Distance对象构造器
   *
   *
   * @param  value: - Distance对象的值
   * @param unit: - Distance对象的单位 @see Unit
   *
   * @return Distance - Distance对象
   */
  constructor(value: number, unit: Unit);

  /**
   * new 方法是创建Distance对象的静态方法，返回一个新的Distance对象。其接收两个参数，一个是Distance对象的值，一个是Distance对象的单位。如果没有指定单位，其默认为&quot;m&quot; (meters)。
   *
   * @param value: number - Distance对象的值
   * @param unit: Unit - Distance对象的单位 @see Unit
   *
   * @return Distance - Distance对象
   *
   */
  static new(value: number, unit?: Unit): Distance;

  /**
   * 返回Distance对象的字符串表示
   *
   * @return string - Distance对象的字符串表示
   */
  toString(): string;

  /**
   * 两个距离想加
   * @param other - 另一个距离对象
   * @returns - 返回两个距离对象的和
   */
  add(other: Distance): Distance;

  /**
   * 两个距离相减
   * @param other - 另一个距离
   * @returns - 返回两个距离对象的差
   */
  sub(other: Distance): Distance;

  /**
   * 显示格式化输出，如果没有指定精度，默认为2，如果没有指定单位，默认为true.
   * @param precision - 指定精度
   * @param unit - 指定是否显示单位
   * @returns {string} - 格式化的字符串
   */
  format({ precision, unit }: Format): string;

  /**
   * Distance对象的单位转换为米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toM(): Distance;

  /**
   * Distance对象的单位转换为千米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toKm(): Distance;

  /**
   * Distance对象的单位转换为厘米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toCm(): Distance;

  /**
   * Distance对象的单位转换为分米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toDm(): Distance;

  /**
   * Distance的单位转换为毫米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toMm(): Distance;

  /**
   * Distance对象的乘法
   * @param factor number - 因子
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  mul(factor: number): Distance;

  /**
   * Distance对象的除法
   *
   * @param factor: number - 除数
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  div(factor: number): Distance;
}

export {
  Area,
  Distance,
  type Unit$1 as Unit,
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
