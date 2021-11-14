import { when } from "ramda";
import { isFalse, isTrue } from "./bool";

export function whenTrue(fn: () => void) {
  return when(isTrue, fn);
}

export function whenFalse(fn: () => void) {
  return when(isFalse, fn);
}
