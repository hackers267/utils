import { HashMap } from "./index";

describe("HashMap has keys", () => {
  test("has keys", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    expect(map.has(1)).toBeTruthy();
    expect(map.has(2)).toBeTruthy();
  });

  test("has no keys", () => {
    const map = HashMap.new<number, string>();
    expect(map.has(1)).toBeFalsy();
    expect(map.has(2)).toBeFalsy();
  });
});

describe("HashMap get values", () => {
  test("get values", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    expect(map.get(1)).toBe("one");
    expect(map.get(2)).toBe("two");
  });

  test("get no values", () => {
    const map = HashMap.new<number, string>();
    expect(map.get(1)).toBe(undefined);
    expect(map.get(2)).toBe(undefined);
  });
});

describe("HashMap remove keys", () => {
  test("remove keys", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const value = map.remove(1);
    expect(map.has(1)).toBe(false);
    expect(map.has(2)).toBe(true);
    expect(value).toBe("one");
  });
});

describe("HashMap map", () => {
  test("map", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const strings = map.map(([, value]) => value + "!");
    expect(strings).toEqual(["one!", "two!"]);
  });

  test("map fn", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const fn = jest.fn();
    map.map(fn);
    expect(fn).toBeCalledTimes(2);
  });
});

describe("HashMap map key", () => {
  test("map key", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const strings = map.mapKey((value) => value * 2);
    expect(strings).toEqual([2, 4]);
  });

  test("map key fn", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const fn = jest.fn();
    map.mapKey(fn);
    expect(fn).toBeCalledTimes(2);
  });
});

describe("HashMap map value", () => {
  test("map value", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const strings = map.mapValue((value) => value + "!");
    expect(strings).toEqual(["one!", "two!"]);
  });

  test("map value fn", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const fn = jest.fn();
    map.mapValue(fn);
    expect(fn).toBeCalledTimes(2);
  });
});

describe("HashMap filter", () => {
  test("filter", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const strings = map.filter(([, value]) => value === "one");
    expect(strings.get(1)).toEqual("one");
    expect(strings.has(2)).toBeFalsy();
  });

  test("filter fn", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const fn = jest.fn();
    map.filter(fn);
    expect(fn).toBeCalledTimes(2);
  });
});

describe("HashMap filter key", () => {
  test("filter key", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const strings = map.filterKey((key) => key === 1);
    expect(strings.get(1)).toEqual("one");
    expect(strings.has(2)).toBeFalsy();
  });

  test("filter key fn", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const fn = jest.fn();
    map.filterKey(fn);
    expect(fn).toBeCalledTimes(2);
  });
});

describe("HashMap filter value", () => {
  test("filter value", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const strings = map.filterValue((value) => value === "two");
    expect(strings.get(2)).toEqual("two");
    expect(strings.has(1)).toBeFalsy();
  });

  test("filter value fn", () => {
    const map = HashMap.new<number, string>();
    map.insert(1, "one");
    map.insert(2, "two");
    const fn = jest.fn();
    map.filterValue(fn);
    expect(fn).toBeCalledTimes(2);
  });
});
