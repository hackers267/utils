import { complement } from "ramda";

export function isTrue(value: any): boolean {
  return !!value;
}
export const isFalse = complement(isTrue);
