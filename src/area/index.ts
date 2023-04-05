export type Unit = "mm2" | "cm2" | "dm2" | "m2" | "km2";
const scale = {
  mm2: 1,
  cm2: 100,
  dm2: 10000,
  m2: 1000000,
  km2: 1000000000000,
};
const unitString = {
  mm2: "mm²",
  cm2: "cm²",
  dm2: "dm²",
  m2: "m²",
  km2: "km²",
};

export class Area {
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
  private constructor(readonly value: number, readonly unit: Unit) {}

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
  static new(value: number, unit: Unit = "m2"): Area {
    return new Area(value, unit);
  }

  /**
   * Area的字符串表示
   *
   *
   * @returns String - 一个拥有2个小数点和单位的字符串
   * @public
   */
  toString(): string {
    return this.value.toFixed(2) + unitString[this.unit];
  }

  /**
   * 两个面积相加
   * @param other 另一个面积对象
   * @returns 返回两个面积对象的和
   * @public
   */
  add(other: Area): Area {
    const factor = scale[this.unit] / scale[other.unit];
    return new Area((this.value * factor + other.value) / factor, this.unit);
  }

  /**
   * 两个面积相减
   * @param other 另一个面积对象
   * @returns 返回两个面积对象的差
   * @public
   */
  sub(other: Area): Area {
    const factor = scale[this.unit] / scale[other.unit];
    return new Area((this.value * factor - other.value) / factor, this.unit);
  }
}
