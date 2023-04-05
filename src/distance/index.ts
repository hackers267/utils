// 距离对象的具体单位
type Unit = "mm" | "cm" | "dm" | "m" | "km";
const scale = {
  mm: 1,
  cm: 10,
  dm: 100,
  m: 1000,
  km: 1000000,
};

export class Distance {
  /**
   * Distance对象构造器
   *
   *
   * @param  value: - Distance对象的值
   * @param unit: - Distance对象的单位 @see Unit
   *
   * @return Distance - Distance对象
   */
  constructor(readonly value: number, readonly unit: Unit) {}

  /**
   * new 方法是创建Distance对象的静态方法，返回一个新的Distance对象。其接收两个参数，一个是Distance对象的值，一个是Distance对象的单位。如果没有指定单位，其默认为&quot;m&quot; (meters)。
   *
   * @param value: number - Distance对象的值
   * @param unit: Unit - Distance对象的单位 @see Unit
   *
   * @return Distance - Distance对象
   *
   */
  static new(value: number, unit: Unit = "m"): Distance {
    return new Distance(value, unit);
  }

  /**
   * 返回Distance对象的字符串表示
   *
   * @return string - Distance对象的字符串表示
   */
  toString(): string {
    return this.value.toFixed(2) + this.unit;
  }

  /**
   * 两个距离想加
   * @param other - 另一个距离对象
   * @returns - 返回两个距离对象的和
   */
  add(other: Distance): Distance {
    const factor = scale[this.unit] / scale[other.unit];
    return new Distance(
      (this.value * factor + other.value) / factor,
      this.unit
    );
  }

  /**
   * 两个距离相减
   * @param other - 另一个距离
   * @returns - 返回两个距离对象的差
   */
  sub(other: Distance): Distance {
    const factor = scale[this.unit] / scale[other.unit];
    return new Distance(
      (this.value * factor - other.value) / factor,
      this.unit
    );
  }
}
