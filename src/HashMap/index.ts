/**
 *  该类在 TypeScript 中实现哈希映射数据结构。
 */

/**
 *  该类在 TypeScript 中实现哈希映射数据结构。
 *  @public
 */
export class HashMap<T, U> {
  private readonly innerMap: Map<T, U>;

  /**
   * 这是一个私有构造函数，它使用可选的键值对数组初始化 Map 对象。
   * @param array - 参数“array”是一个可选的元组数组，其中每个元组包含两个类型为“T”和“U”的值。
   */
  private constructor(array?: Array<[T, U]>) {
    this.innerMap = new Map<T, U>(array);
  }

  /**
   * 返回此`HashMap`的大小
   * @returns `size`返回此`HashMap`的大小
   */
  public get size(): number {
    return this.innerMap.size;
  }

  /**
   * 此函数使用可选数组参数创建 `HashMap` 的新实例。
   * @param array - “array”参数是一个可选的元组数组，其中每个元组的第一个元素是“T”类型，第二个元素是“U”类型。该数组用于初始化 `HashMap` 类的新实例。如果没有提供数组，一个空的`HashMap`
   * @returns `HashMap` 类的新实例，将指定的键值对数组作为其初始数据。
   */
  static new<T, U>(array?: Array<[T, U]>): HashMap<T, U> {
    return new HashMap<T, U>(array);
  }

  /**
   * 此函数返回与`HashMap`中给定键关联的值，如果未找到该键，则返回`undefined`。
   * @param key - “key”参数是T类型。它用于从与此键关联的映射中检索值。
   * @returns `get` 方法返回 `HashMap` 对象中指定键关联的值，如果找不到该键，则返回 `undefined`。
   */
  public get(key: T): U | undefined {
    return this.innerMap.get(key);
  }

  /**
   * 此函数检查给定键是否存在于`HashMap`中并返回布尔值。
   * @param key - “key”参数是 T 类型。它表示`HashMap`中的键。
   * @returns 一个布尔值，指示键是否存在于`HashMap`中。
   */
  public has(key: T): boolean {
    return this.innerMap.has(key);
  }

  /**
   * 此函数将键值对插入 `HashMap` 并返回更新后的 `HashMap`
   * @param key - “key”参数的类型为T。它用于标识存储在 `HashMap` 中的值。
   * @param value - “value”参数的类型为“U”，表示将与 `HashMap` 中的给定键相关联的值。
   * @returns 返回插入新值后的 `HashMap`
   */
  public insert(key: T, value: U): HashMap<T, U> {
    this.innerMap.set(key, value);
    return this;
  }

  /**
   * 此函数从`HashMap`中删除给定键的内容对并返回与该键关联的值。
   * @param key - 关键参数是T类型，也就是说它可以是任何数据类型。它`HashMap`中的键。
   * @returns `remove` 方法返回从`HashMap`中删除的给定键关联的值，如果`HashMap`中不存在给定的键，则返回 `undefined`。
   */
  public remove(key: T): U | undefined {
    const value = this.innerMap.get(key);
    this.innerMap.delete(key);
    return value;
  }

  /**
   * 这是一个 TypeScript 函数，它映射`HashMap`并根据提供的函数返回不同类型的新数组。
   * @param fn - 接受三个参数的函数：第一个参数是一个类型为`[T,U]`的元组，第二个参数是一个整数，第三个参数是一个数组。
   * @returns `map` 方法返回一个类型为 `R[]` 的数组
   *
   * @remarks
   *
   * 因为`HashMap`的Map方法返回的是一个`R`类型的数组，为了可以在链式调用中可以再使用`HashMap`，可以利用数组的`reduce`方式重新把`R`类型的数组转为`HashMap`对象。
   *
   * @example
   *
   * ```ts
   * const hashMap = HashMap.new([[1,2],[3,4],[5,6]]);
   * hashMap.map(([a,b])=>a+b)
   *        .reduce((acc,cur)=>{
   *            acc.insert(cur,`${cur}`);
   *            return acc;
   *        },HashMap.new<number,string>())
   * ```
   */
  public map<R>(
    fn: (value: [T, U], index: number, array: Array<[T, U]>) => R
  ): R[] {
    return Array.from(this.innerMap).map(fn);
  }

  /**
   * 此函数使用提供的函数将 `HashMap` 对象的键映射到新数组。
   * @param fn - `fn` 是一个接受三个参数的函数：键的“值”、键的“索引”和键的整个“数组”。
   * @returns `mapKey` 方法返回一个类型为 `R[]` 的数组
   */
  public mapKey<R>(fn: (value: T, index: number, array: T[]) => R): R[] {
    return Array.from(this.innerMap.keys()).map(fn);
  }

  /**
   * 此函数使用提供的函数将`HashMap`对象的值映射到新数组。
   * @param fn - 接受三个参数的函数：值的“值”、键的“索引”和键的整个“数组”。
   * @returns `mapValue` 方法返回一个值数组。
   */
  public mapValue<R>(fn: (value: U, index: number, array: U[]) => R): R[] {
    return Array.from(this.innerMap.values()).map(fn);
  }

  /**
   * 此函数根据给定条件过滤 `HashMap` 中的键值对，并返回过滤后的对的新 `HashMap`。
   * @param fn - 接受三个参数的函数：第一个参数是一个类型为`[T,U]`的元组，第二个参数是一个整数，第三个参数是一个数组。
   * @returns `filter` 方法返回过滤键值对后的 `HashMap` 类的新实例。
   */
  public filter(
    fn: (value: [T, U], index: number, array: Array<[T, U]>) => boolean
  ): HashMap<T, U> {
    const array = this.toArray().filter(fn);
    return new HashMap<T, U>(array);
  }

  /**
   * 此函数根据给定条件过滤 `HashMap` 的键，并返回过滤后的新`HashMap`。
   * @param fn - 接受三个参数的函数：第一个参数是键，第二个参数是一个整数，第三个参数是一个数组。
   * @returns HashMap 类的一个新实例。
   */
  public filterKey(
    fn: (value: T, index: number, array: T[]) => boolean
  ): HashMap<T, U> {
    const keyValue = this.toKeyArray();
    const array = this.toArray().filter(([key], index) =>
      fn(key, index, keyValue)
    );
    return new HashMap<T, U>(array);
  }

  /**
   * 此函数根据给定条件过滤 `HashMap` 的值并返回过滤后的新的`HashMap`。
   * @param fn - 接受三个参数的函数：第一个参数是值，第二个参数是一个索引，第三个参数是一个数组。
   * @returns `filterValue` 方法返回一个新的 `HashMap` 实例。
   */
  public filterValue(
    fn: (value: U, index: number, array: U[]) => boolean
  ): HashMap<T, U> {
    const valueArray = this.toValueArray();
    const array = this.toArray().filter(([key, value], index) =>
      fn(value, index, valueArray)
    );
    return new HashMap<T, U>(array);
  }

  *[Symbol.iterator](): IterableIterator<[T, U]> {
    for (const [key, value] of Array.from(this.innerMap)) {
      yield [key, value];
    }
  }

  /**
   * 此函数将 `HashMap` 对象转换为元组数组。
   * @returns `toArray()` 方法返回一个元组数组，每个元组的类型是“[T, U]”，其中“T”是映射中键的类型，“U”是映射中值的类型。
   */
  private toArray(): Array<[T, U]> {
    return Array.from(this.innerMap);
  }

  /**
   * 此函数从 Map 对象返回一个键数组。
   * @returns `toKeyArray()` 方法返回一个类型为 `T` 的数组，其中包含`HashMap` 属性的所有键。。
   */
  private toKeyArray(): T[] {
    return Array.from(this.innerMap.keys());
  }

  /**
   * 此函数从 Map 对象返回值数组。
   * @returns `toValueArray()` 方法从 `innerMap` 对象返回一个类型为 `U` 的值数组。 其中包含`HashMap` 属性的所有值。
   */
  private toValueArray(): U[] {
    return Array.from(this.innerMap.values());
  }
}
