/**
 * 根据身份证计算生日
 * @param no
 * @returns {string}
 */
export function calcBirthday(no: string) {
  return no.slice(6, 14);
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
