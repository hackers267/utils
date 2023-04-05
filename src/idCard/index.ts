/**
 * 根据身份证计算生日
 */
import {
  __,
  type KeyValuePair,
  last,
  map,
  modulo,
  pipe,
  split,
  sum,
  zip,
} from "ramda";

/**
 * 函数“calcBirthday”接受一个身份证字符串参数并执行与生日相关的计算。
 * @param no - 身份证字符串
 * @returns - 生日
 * @public
 */
export function calcBirthday(no: string): string {
  const str = no.slice(6, 14);
  const year = str.slice(0, 4);
  const month = str.slice(4, 6);
  const day = str.slice(6);
  return `${year}-${month}-${day}`;
}

/**
 * 根据身份证计算性别
 * @param no - 身份证字符串
 * @returns - 性别
 * @public
 */
export function calcSex(no: string): "男" | "女" {
  const char = no.slice(-2, -1);
  const mod = Number(char) % 2;
  return mod === 1 ? "男" : "女";
}

/**
 * 校验身份证是否合法
 * @param no - 身份证字符串
 * @returns - 身份证是否合法
 * @public
 */
export function verity(no: string): boolean {
  if (!lengthIs18(no)) return false;
  if (!matchIdCard(no)) return false;
  return verityCheckDigit(no);

  /**
   *  `verityCheckDigit` 函数用于验证给定的 18 位中国身份证号码的校验位。它首先根据身份证号码前17位数字，通过特定算法计算出期望校验位，然后将期望校验位 与实际校验位（身份证号码的最后一位）进行比较，判断ID是否为身份证号码。卡号有效。
   */
  function verityCheckDigit(str: string): boolean {
    const array = calcTwoDimensionalArray(str);
    const total = calcSum(array);
    const expected = calcCheckDigit(total);
    const tail = last(str);
    return expected === tail;
  }

  /**
   * 数据在形式上是否符合身份证格式
   * @param str - 身份证字符串
   * @returns - 身份证是否符合基本的格式
   */
  function matchIdCard(str: string): boolean {
    const reg = /^\d{17}[0-9xX]$/;
    return reg.test(str);
  }

  /**
   * 判断字符串长度是否是18位
   * @param str - 字符串
   * @returns - 字符串长度是否是18位,ture: 18位，false: 不是18位
   */
  function lengthIs18(str: string): boolean {
    return str.length === 18;
  }

  /**
   *  `calcCheckDigit` 函数用于计算给定的 18 位中国身份证号码的预期校验位。它接受一个数字作为输入，对其进行模 11 运算，并根据模运算的结果返回相应的校验位。校验位用于验证身份证号码的有效性
   *
   * @param number - 身份证号码的数字
   *
   * @returns - 身份证号码的校验位
   */
  function calcCheckDigit(number: number): string {
    const modEleven = modulo(__, 11);
    const mod = modEleven(number);
    const checkDigits: string[] = [
      "1",
      "0",
      "X",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];
    return checkDigits[mod];
  }

  function calcTwoDimensionalArray(
    str: string
  ): Array<KeyValuePair<number, number>> {
    const coefficients: number[] = [
      7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,
    ];
    const zipCoefficient = zip(coefficients);
    return zipCoefficient(getArray()(str));
  }

  function calcSum(twoDimensionalArray: Array<[number, number]>): number {
    const mapMultiply = map(multiply);
    const data = mapMultiply(twoDimensionalArray);
    return sum(data);
  }

  function getArray(): (str: string) => number[] {
    const splitEmpty = split("");
    const mapToNumber = map(toNumber);
    return pipe(splitEmpty, mapToNumber);
  }

  /** `toNumber` 函数接受一个字符串作为输入并返回一个数字。它在 getArray 函数中用于将输入字符串中的每个字符转换为数字。这对于 verityCheckDigit 函数中的后续计算是必需的，该函数涉及将 ID
   号中的每个数字乘以相应的系数。
   * @param x - 输入字符
   * @returns - 转换后的数
   */
  function toNumber(x: string): number {
    return Number(x);
  }

  /**
   * 计算两个数时的乘积
   *
   * @param a - 第一个数
   * @param b - 第二个数
   *
   * @returns - 乘积
   */
  function multiply([a, b]: [a: number, b: number]): number {
    return a * b;
  }
}
