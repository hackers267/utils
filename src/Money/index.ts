/**
 * `Money` 类表示货币值，并提供用于创建、添加、减去、格式化以及将值转换为字符串的方法。
 * @public
 */

/**
 * `Money` 类表示货币值，并提供用于创建、添加、减去、格式化以及将值转换为字符串的方法。
 * @public
 */
export class Money {
  /**
   * 构建器，接收一个数值，返回一个Money对象
   * @param value - 一个整数或浮点数
   * @returns Money
   * @internal
   */
  private constructor(private readonly value: number) {}

  /**
   * 此函数创建具有给定值的 Money 类的新实例。
   * @param value - `value` 参数是 `number` 或 `string` 类型。它代表正在创建的货币对象的价值。
   * @returns 返回 `Money` 类的新实例
   */
  public static new(value: number | string): Money {
    const val = Number(value);
    return new Money(val);
  }

  /**
   * 此函数将两个 Money 对象的值相加并返回一个新的 Money 对象及其总和。
   * @param  other - Money 对象，表示要添加到当前 Money 对象的金额。
   * @returns Money 类的新实例，将当前实例和另一个实例的值之和作为参数传递。
   */
  public add(other: Money): Money {
    const value = this.value + other.value;
    return new Money(value);
  }

  /**
   * 此函数从一个 Money 对象的值中减去另一个，并返回一个新的 Money 对象和结果。
   * @param other - Money 对象表示要从当前 Money 对象中减去的金额。
   * @returns `Money` 类的新实例，其值等于当前实例的值与作为参数传递的 `other` 实例的值之间的差值。
   */
  public sub(other: Money): Money {
    const value = this.value - other.value;
    return new Money(value);
  }

  /**
   *  此函数把一个Money对象的值扩大指定的倍数，并返回一个新的Money对象。
   *  @param  factor - 要扩展的倍数。
   *  @returns 新的Monkey类的新实例，其值等于当前实例的值的factor倍。
   */
  public mul(factor: number): Money {
    const value = this.value * factor;
    return new Money(value);
  }

  /**
   *  此函数把一个Money对象缩小到指定的倍数，并返回一个新的Monkey对象。
   *  @param factor - 要缩小的倍数。
   *  @returns 新的Monkey类的新实例，其值等于当前实例的值的1/factor倍
   */
  public div(factor: number): Money {
    const value = this.value / factor;
    return new Money(value);
  }

  /** 将 `this.value` 的数值转换为字符串值并返回。
   * @returns 返回该整数的字符串形式的金额。
   */
  public toString(): string {
    return `${this.value}`;
  }

  public toChinese(precision: number = 2): string {
    return this.format("zh-CN", "CNY", precision);
  }

  /**
   * 格式化金额
   * @param locales - 地域
   * @param currency - 币种
   * @param precision  - 小数位数
   * @returns 一个字符串，表示当前金额。
   * @internal
   */
  private format(locales: string, currency: string, precision: number): string {
    return Intl.NumberFormat(locales, {
      style: "currency",
      currency,
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(this.value);
  }
}
