/**
 * 数值类，用于数值的表示和计算等。
 * @public
 */

/**
 * Digit的格式化参数
 * - precision: 小数点后的位数
 * - unit: 单位
 * @public
 */
export interface DigitFormat {
  precision?: number;
  unit?: string;
}

/**
 * 数值类，用于数值的表示和计算等。
 * @public
 */
export class Digit {
  /**
   * 这是 TypeScript 中的私有构造函数，它接受一个数字参数并将其分配给私有只读属性。
   * @param  innerValue - 参数“innerValue”是 TypeScript 类构造函数中类型为数字的私有只读属性。用于初始化类实例的值，只能在类内访问。 `private`
   * 关键字确保该属性在类外不可访问，而 `readonly`
   */
  private constructor(private readonly innerValue: number) {}

  public get value(): number {
    return this.innerValue;
  }

  /**
   * 该函数使用给定值创建 Digit 类的新实例。
   * @param  value - “值”参数是一个数字，表示数字的值。它用于创建“Digit”类的新实例。
   * @returns 具有指定“value”参数的“Digit”类的新实例。
   */
  static new(value: number): Digit {
    return new Digit(value);
  }

  /**
   * 此函数计算两个Digit的和，并返回新的Digit对象。
   * @param other - 另一个Digit对象。
   * @returns 新的Digit对象
   * @public
   */
  public add(other: Digit): Digit {
    const factor = Math.max(
      this.getFactor(this.value),
      this.getFactor(other.value)
    );
    const result = (this.value * factor + other.value * factor) / factor;
    return Digit.new(result);
  }

  /**
   * 此函数计算两个Digit的差，并返回新的Digit对象。
   * @param other - 另一个Digit对象。
   * @returns 新的Digit对象
   * @public
   */
  public subtract(other: Digit): Digit {
    return Digit.new(this.value - other.value);
  }

  /**
   * 此函数计算两个Digit的乘积，并返回新的Digit对象。
   * @param other - 另一个Digit对象。
   * @returns 新的Digit对象
   * @public
   */
  public multiply(other: Digit): Digit {
    return Digit.new(this.value * other.value);
  }

  /**
   * 此函数计算两个Digit的除法，并返回新的Digit对象。
   * @param other - 另一个Digit对象。
   * @returns 新的Digit对象
   * @public
   */
  public divide(other: Digit): Digit {
    return Digit.new(this.value / other.value);
  }

  /**
   * 此函数返回一个字符串表示的数字。
   * @returns 返回一个字符串表示的数字
   * @public
   */
  public toString(): string {
    return String(this.value);
  }

  /**
   * 此函数比较两个Digit的值是否相等。
   * @param other - 另一个Digit对象。
   * @returns 如果两个Digit的值相等，则返回 true，否则返回 false
   * @public
   */
  public equals(other: Digit): boolean {
    return this.value === other.value;
  }

  /**
   * 此函数以指定的格式表示一个Digit对象的字符串表示
   * @returns 返回一个字符串表示的数字
   * @public
   */
  public format({ precision = 2, unit = "" }: DigitFormat): string {
    const value = Intl.NumberFormat("zh-CN", {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(this.value);
    return value + unit;
  }

  /**
   * 此函数以百分比的形式展示Digit对象的字符串表示。
   * @param precision - 精度,默认值为2
   * @returns 返回百分比表示的Digit对象
   * @public
   */
  public toPercent(precision: number = 0): string {
    return Intl.NumberFormat("zh-CN", {
      style: "percent",
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(this.value);
  }

  /**
   * 该函数根据数字小数位的长度返回一个因子。
   * @param num - 我们要为其计算因子的输入数字。
   * @returns 函数 getFactor 将一个数字作为输入并返回一个可用于将数字转换为整数的因子。如果输入的数字有小数点，则系数计算为 10 的小数点后位数的次方。如果输入数字是整数，则因子为 1。
   */
  private getFactor(num: number): number {
    const str = num.toString();
    const length = str.length;
    const index = str.indexOf(".");
    if (index > -1) {
      return 10 ** (length - index);
    }
    return 1;
  }
}
