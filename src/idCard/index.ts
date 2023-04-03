/**
 * 根据身份证计算生日
 * @param no
 * @returns {string}
 */
import { __, last, map, modulo, pipe, split, sum, zip } from "ramda";

export function calcBirthday(no: string) {
  const str = no.slice(6, 14);
  const year = str.slice(0, 4);
  const month = str.slice(4, 6);
  const day = str.slice(6);
  return `${year}-${month}-${day}`;
}

/**
 * 根据身份证计算性别
 * @param no
 * @returns {string}
 */
export function calcSex(no: string) {
  const char = no.slice(-2, -1);
  const mod = Number(char) % 2;
  return mod === 1 ? "男" : "女";
}

/**
 * 校验身份证
 * @param no
 * @returns {boolean}
 */
export function verity(no: string): boolean {
  if (!lengthIs18(no)) return false;
  if (!matchIdCard(no)) return false;
  return verityCheckDigit(no);

  function verityCheckDigit(str: string) {
    const array = calcTwoDimensionalArray(str);
    const total = calcSum(array);
    const expected = calcCheckDigit(total);
    const tail = last(str);
    return expected === tail;
  }

  /**
   * 数据在形式上是否符合身份证格式
   * @param str
   */
  function matchIdCard(str: string): boolean {
    const reg = /^\d{17}[0-9xX]$/;
    return reg.test(str);
  }

  function lengthIs18(str: string) {
    return str.length === 18;
  }

  function calcCheckDigit(number: number) {
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

  function calcTwoDimensionalArray(str: string) {
    const coefficients: number[] = [
      7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,
    ];
    const zipCoefficient = zip(coefficients);
    return zipCoefficient(getArray()(str));
  }

  function calcSum(twoDimensionalArray: [number, number][]) {
    const mapMultiply = map(multiply);
    const data = mapMultiply(twoDimensionalArray);
    return sum(data);
  }

  function getArray() {
    const splitEmpty = split("");
    const mapToNumber = map(toNumber);
    return pipe(splitEmpty, mapToNumber);
  }

  function toNumber(x: string) {
    return Number(x);
  }

  function multiply([a, b]: [a: number, b: number]) {
    return a * b;
  }
}
