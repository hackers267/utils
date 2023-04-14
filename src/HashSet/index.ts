/**
 * HashSet
 */

/**
 * HashSet 类是 TypeScript 中的一个通用类，它创建一个具有唯一元素的新集合。
 */
export class HashSet<T> {
  private readonly innerSet: Set<T>;

  /**
   * `HashSet` 私有构造器
   */
  private constructor(array?: T[]) {
    this.innerSet = new Set<T>(array);
  }

  /**
   * 获取`HashSet`中的元素数量
   */
  get size(): number {
    return this.innerSet.size;
  }

  /**
   * 使用可选的元素数组创建一个`HashSet`对象
   * @param [array] - 参数“array”是类型“T”的可选数组。如果提供，它将用于使用数组的元素初始化一个新的“Set”对象。如果未提供，将创建一个空的“Set”对象。 `T` 类型是泛型类型参数
   */
  public static new<T>(array?: T[]): HashSet<T> {
    return new HashSet<T>(array);
  }

  /**
   * 此函数检查集合中是否存在指定的值。
   * @param v - v 是指定的值，用作检查它是否存在于`HashSet`中。
   * @returns `has` 方法返回一个布尔值，`HashSet`中是否包含值 `v`。如果集合中存在“v”，该方法将返回“true”，否则返回“false”。
   */
  public has(v: T): boolean {
    return this.innerSet.has(v);
  }

  /**
   * 该函数将值添加到 `HashSet` 并返回更新后的 `HashSet`.
   * @param v - 要添加到 HashSet 的值。
   * @returns 更新后的`HashSet`
   */
  public add(v: T): HashSet<T> {
    this.innerSet.add(v);
    return this;
  }

  /**
   * 此函数从 HashSet 中删除一个元素并返回更新后的 HashSet。
   * @param v - 参数 v 表示要从 HashSet 中移除的元素。
   * @returns 更新后的`HashSet`
   */
  public remove(v: T): HashSet<T> {
    return this.filter((val) => val !== v);
  }

  /**
   * 根据提供的函数将数组元素映射到新数组。
   * @param fn - fn 是一个接受三个参数的函数：值、索引和数组。它是一个回调函数，将应用于数组的每个元素。
   * @returns 将对象转换为数组。
   */
  public map<R>(fn: (value: T, index: number, array: T[]) => R): R[] {
    return this.toArray().map(fn);
  }

  /**
   * 此函数根据给定条件过滤 HashSet 的元素，并返回包含过滤元素的新 HashSet。
   * @param fn - 此函数用作过滤器函数，以确定 HashSet 的哪些元素应包含在结果中。
   * @returns HashSet 类的新实例，其中包含基于提供的函数过滤的元素。
   */
  public filter(
    fn: (value: T, index: number, array: T[]) => boolean
  ): HashSet<T> {
    return new HashSet<T>(this.toArray().filter(fn));
  }

  /**
   * 该函数检查数据结构是否为空并返回布尔值。
   * @returns 一个布尔值，表示`HashSet`是否为空。
   */
  public isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * “clear”函数清除集合中的所有元素。
   */
  public clear(): void {
    this.innerSet.clear();
  }

  /**
   * 此函数检查此 `HashSet` 是否是另一个 `HashSet` 的子集。
   * @param other - other 另一个`HashSet<T>`对象。
   * @returns `HashSet`是否是另一个`HashSet`的子集。
   */
  public isSubset(other: HashSet<T>): boolean {
    return this.toArray().every((v) => other.has(v));
  }

  /**
   * 此函数检查此`HashSet`是否是另一个`HashSet`的超集。
   * @param other - other 是一个 T 类型的 HashSet，表示要检查的集合是否是当前 HashSet 的子集。
   * @returns `isSuperset` 函数返回一个布尔值。如果调用该函数的 `HashSet` 是作为参数传递的 `other` `HashSet` 的超集，则返回 `true`，否则返回 `false`。
   */
  public isSuperset(other: HashSet<T>): boolean {
    return other.isSubset(this);
  }

  /**
   * 该函数返回一个新的 HashSet，它是当前 HashSet 和另一个 HashSet 的并集。
   * @param other - 另一个`HashSet<T>`对象。
   * @returns 两个`HashSet`的并集。
   */
  public union(other: HashSet<T>): HashSet<T> {
    return new HashSet<T>(this.toArray().concat(other.toArray()));
  }

  /**
   * 该函数返回一个新的 HashSet，其中包含当前 HashSet 但不在另一个 HashSet 中的元素。
   * @param other - 另一个`HashSet`对象。
   * @returns 两个`HashSet`的差集。
   */
  public difference(other: HashSet<T>): HashSet<T> {
    return this.filter((v) => !other.has(v));
  }

  /**
   * 该函数返回一个新的 HashSet，它包含当前 HashSet 和另一个 HashSet 的交集。
   * @param other - 另一个`HashSet`对象。
   * @returns 两个`HashSet`的交集。
   */
  public intersection(other: HashSet<T>): HashSet<T> {
    return this.filter((v) => other.has(v));
  }

  /**
   * 此函数返回两个哈希集之间的对称差异。
   * @param other - 另一个`HashSet`对象。
   * @returns 一个新的 HashSet，它包含当前 HashSet 和作为参数传递的另一个 HashSet 之间的对称差异。
   */
  public symmetricDifference(other: HashSet<T>): HashSet<T> {
    return this.union(other).difference(this.intersection(other));
  }

  /**
   * 此函数判断两个`HashSet`是否相等
   * @param other - 另一个`HashSet`对象。
   * @returns 两个`HashSet`是否相等。
   */
  public isEqual(other: HashSet<T>): boolean {
    if (this.size !== other.size) {
      return false;
    }
    return this.isSubset(other) && this.isSuperset(other);
  }

  /**
   * 此函数将给定函数应用于数组的每个元素。
   * @param fn - 参数 `fn` 是一个接受三个参数的函数：`value`、`index` 和 `array`。它是一个回调函数，将为数组中的每个元素调用。 `value` 参数表示当前正在处理的元素，`index`
   * 表示该元素的索引
   */
  public forEach(fn: (value: T, index: number, array: T[]) => void): void {
    this.toArray().forEach(fn);
  }

  /**
   * 该函数将 Set 转换为数组。
   * @returns 转换后的数组。
   */
  private toArray(): T[] {
    return Array.from(this.innerSet);
  }
}
