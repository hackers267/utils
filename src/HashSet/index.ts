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
   * 该函数将 Set 转换为数组。
   * @returns 转换后的数组。
   */
  private toArray(): T[] {
    return Array.from(this.innerSet);
  }
}
