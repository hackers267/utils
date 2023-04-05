/**
 * 该函数检查给定数字是否为奇数并返回一个布尔值。
 * @param n - 类型为 number 的参数“n”。
 *
 * @returns 一个布尔值，指示输入数字是否为奇数。
 *
 * @public
 */
export function isOdd(n: number): boolean {
  return n % 2 === 1;
}

/**
 * 该函数检查给定数字是否为偶数并返回一个布尔值。
 * @param n - 类型为 number 的参数“n”。
 *
 * @returns 一个布尔值，表示输入的数字是否为偶数。
 *
 * @public
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}
