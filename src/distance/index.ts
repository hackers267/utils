// 距离对象的具体单位
type Unit = "mm" | "cm" | "dm" | "m" | "km";
const scale = {
  mm: 1,
  cm: 10,
  dm: 100,
  m: 1000,
  km: 1000000,
};

interface Format {
  precision?: number;
  unit?: boolean;
}

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

  /**
   * 显示格式化输出，如果没有指定精度，默认为2，如果没有指定单位，默认为true.
   * @param precision - 指定精度
   * @param unit - 指定是否显示单位
   * @returns {string} - 格式化的字符串
   */
  format({ precision = 2, unit = true }: Format): string {
    const value = this.value.toFixed(precision);
    return unit ? value + this.unit : value;
  }

  /**
   * Distance对象的单位转换为米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toM(): Distance {
    return this.to("m");
  }

  /**
   * Distance对象的单位转换为千米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toKm(): Distance {
    return this.to("km");
  }

  /**
   * Distance对象的单位转换为厘米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toCm(): Distance {
    return this.to("cm");
  }

  /**
   * Distance对象的单位转换为分米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toDm(): Distance {
    return this.to("dm");
  }

  /**
   * Distance的单位转换为毫米
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  toMm(): Distance {
    return this.to("mm");
  }

  /**
   * Distance对象的乘法
   * @param factor number - 因子
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  mul(factor: number): Distance {
    return new Distance(this.value * factor, this.unit);
  }

  /**
   * Distance对象的除法
   *
   * @param factor: number - 除数
   *
   * @returns Distance - Distance对象
   *
   * @public
   */
  div(factor: number): Distance {
    return new Distance(this.value / factor, this.unit);
  }

  /**
   * Distance对象的单位转换为指定单位
   *
   * @param unit - 指定单位
   *
   * @returns Distance - Distance对象
   *
   * @private
   */
  private to(unit: Unit): Distance {
    const factor = scale[this.unit] / scale[unit];
    return new Distance(this.value * factor, unit);
  }
}
