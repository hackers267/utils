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
  private constructor(readonly value: number, readonly unit: Unit) {}

  static new(value: number, unit: Unit = "m2"): Area {
    return new Area(value, unit);
  }

  toString(): string {
    return this.value.toFixed(2) + unitString[this.unit];
  }

  /**
   * 两个面积相加
   * @param other 另一个面积对象
   * @returns 返回两个面积对象的和
   */
  add(other: Area): Area {
    const factor = scale[this.unit] / scale[other.unit];
    return new Area((this.value * factor + other.value) / factor, this.unit);
  }

  /**
   * 两个面积相减
   * @param other 另一个面积对象
   * @returns 返回两个面积对象的差
   */
  sub(other: Area): Area {
    const factor = scale[this.unit] / scale[other.unit];
    return new Area((this.value * factor - other.value) / factor, this.unit);
  }
}
