import { HashSet } from "./index";

describe("HashSet Init", function () {
  it("init with an empty array", function () {
    const set = HashSet.new<number>();
    expect(set.size).toBe(0);
  });

  it("init with specified values", function () {
    const set = HashSet.new<number>([1, 2, 3]);
    expect(set.size).toBe(3);
  });
});

describe("HashSet add", function () {
  it("add", function () {
    const set = HashSet.new<number>();
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.size).toBe(3);
  });

  it("add with initial value", function () {
    const set = HashSet.new<number>([1, 2, 3]);
    set.add(4);
    expect(set.size).toBe(4);
  });
});

describe("HashSet Has", function () {
  it("has", function () {
    const set = HashSet.new<number>();
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.has(1)).toBeTruthy();
    expect(set.has(4)).toBeFalsy();
  });
});

describe("HashSet remove", function () {
  it("remove", function () {
    const set = HashSet.new<number>();
    set.add(1);
    set.add(2);
    set.add(3);
    const s = set.remove(2);
    expect(s.size).toBe(2);
    expect(s.has(1)).toBeTruthy();
    expect(s.has(3)).toBeTruthy();
    expect(s.has(2)).toBeFalsy();
    expect(set.has(2)).toBeTruthy();
  });
});

describe("HashSet map", function () {
  it("map", function () {
    const set = HashSet.new<number>();
    set.add(1);
    set.add(2);
    set.add(3);
    const map = HashSet.new(set.map((v) => v + 1));
    expect(map.size).toBe(3);
    expect(map.has(2)).toBeTruthy();
    expect(map.has(3)).toBeTruthy();
    expect(map.has(4)).toBeTruthy();
  });
});

describe("HashSet filter", function () {
  it("filter", function () {
    const set = HashSet.new<number>();
    set.add(1);
    set.add(2);
    set.add(3);
    const filter = set.filter((v) => v % 2 === 0);
    expect(set.size).toBe(3);
    expect(filter.size).toBe(1);
    expect(filter.has(2)).toBeTruthy();
    expect(filter.has(3)).toBeFalsy();
  });
});
