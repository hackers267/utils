/**
 * 该函数检查一个值是真值还是假值并返回一个布尔值。
 * @param value - 可以作为参数传递给函数的任何类型的值。
 * @returns 一个布尔值。该函数检查输入值是真值还是假值，如果为真则返回true，如果为假则返回false。
 * @public
 */
export function isTrue(value: any): boolean {
  return !!value;
}

/**
 * 该函数检查值是否为假。
 * @param value - 参数“value”的类型为“any”，这意味着它可以是任何数据类型（字符串、数字、布尔值、对象等）。函数“isFalse”接收此参数并返回一个布尔值，指示输入值是否为假。
 * @returns 函数 isFalse 返回一个布尔值。如果输入值为假值，则返回 true ，否则返回 false 。
 * @public
 */
export function isFalse(value: any): boolean {
  return !isTrue(value);
}
