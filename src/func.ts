import { when } from "ramda";
import { isFalse, isTrue } from "./bool";

/**
 * 函数 whenTrue 返回一个函数，该函数将另一个函数作为参数，并且仅当 isTrue 函数返回 true 时才执行它。
 * @param fn - `fn` 是一个不接受任何参数且不返回任何内容的函数 (`void`)。这是 isTrue 函数返回 true 时将执行的函数。
 * @returns 返回一个函数，该函数将另一个函数作为参数，并且仅当 isTrue 函数返回 true 时才执行它。
 * @public
 */
export function whenTrue(fn: () => void) {
  return when(isTrue, fn);
}

/**
 * 函数“whenFalse”接受一个回调函数作为参数，并在条件为假时执行它。
 * @param fn - `fn` 参数是一个不接受任何参数且不返回任何值的函数。它是一个回调函数，当某个条件为假时将被执行。
 * @returns 返回一个函数，该函数将另一个函数作为参数，并在条件为假时执行它。
 * @public
 */
export function whenFalse(fn: () => void) {
  return when(isFalse, fn);
}
