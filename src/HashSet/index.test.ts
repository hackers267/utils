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

describe("HashMap clear", function () {
  it("clear", function () {
    const set = HashSet.new<number>();
    set.add(1);
    set.add(2);
    set.add(3);
    set.clear();
    expect(set.size).toBe(0);
    expect(set.isEmpty()).toBeTruthy();
  });
});

describe("HashSet union", function () {
  it("union", function () {
    const set1 = HashSet.new<number>();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(4);
    set2.add(5);
    set2.add(6);
    const union = set1.union(set2);
    expect(union.size).toBe(6);
    expect(union.has(1)).toBeTruthy();
    expect(union.has(2)).toBeTruthy();
    expect(union.has(3)).toBeTruthy();
    expect(union.has(4)).toBeTruthy();
    expect(union.has(5)).toBeTruthy();
    expect(union.has(6)).toBeTruthy();
  });
});

describe("HashSet intersection", function () {
  it("intersection", function () {
    const set1 = HashSet.new<number>();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(2);
    set2.add(3);
    set2.add(4);
    const intersection = set1.intersection(set2);
    expect(intersection.size).toBe(2);
    expect(intersection.has(2)).toBeTruthy();
    expect(intersection.has(3)).toBeTruthy();
  });
});

describe("HashSet difference", function () {
  it("difference", function () {
    const set1 = HashSet.new<number>();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(2);
    set2.add(3);
    set2.add(4);
    const difference = set1.difference(set2);
    expect(difference.size).toBe(1);
    expect(difference.has(1)).toBeTruthy();
  });
});

describe("HashSet isSubset", function () {
  it("isSubset false", function () {
    const set1 = HashSet.new<number>();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(2);
    set2.add(3);
    set2.add(4);
    const isSubset = set1.isSubset(set2);
    expect(isSubset).toBeFalsy();
  });

  it("isSubset true", function () {
    const set1 = HashSet.new<number>();
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(2);
    set2.add(3);
    set2.add(4);
    const isSubset = set1.isSubset(set2);
    expect(isSubset).toBeTruthy();
  });
});

describe("HashSet isSuperset", function () {
  it("isSuperset false", function () {
    const set1 = HashSet.new<number>();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(2);
    set2.add(3);
    set2.add(4);
    const isSuperset = set1.isSuperset(set2);
    expect(isSuperset).toBeFalsy();
  });

  it("isSuperset true", function () {
    const set1 = HashSet.new<number>();
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(2);
    set2.add(3);
    set2.add(4);
    const isSuperset = set2.isSuperset(set1);
    expect(isSuperset).toBeTruthy();
  });
});

describe("HashSet isEqual", function () {
  it("isEqual true", function () {
    const set1 = HashSet.new<number>();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(1);
    set2.add(2);
    set2.add(3);
    const isEqual = set1.isEqual(set2);
    expect(isEqual).toBeTruthy();
  });

  it("isEqual false", function () {
    const set1 = HashSet.new<number>();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(1);
    set2.add(2);
    const isEqual = set1.isEqual(set2);
    expect(isEqual).toBeFalsy();
  });
});

describe("HashSet symmetricDifference", function () {
  it("symmetricDifference", function () {
    const set1 = HashSet.new<number>();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const set2 = HashSet.new<number>();
    set2.add(2);
    set2.add(3);
    set2.add(4);
    const symmetricDifference = set1.symmetricDifference(set2);
    expect(symmetricDifference.size).toBe(2);
    expect(symmetricDifference.has(1)).toBeTruthy();
    expect(symmetricDifference.has(4)).toBeTruthy();
  });
});

describe("HashSet forEach", function () {
  it("forEach", function () {
    const set = HashSet.new<number>();
    set.add(1);
    set.add(2);
    set.add(3);
    const callback = jest.fn();
    set.forEach(callback);
    expect(callback).toBeCalledTimes(3);
    expect(callback.mock.calls[0][0]).toBe(1);
    expect(callback.mock.calls[1][0]).toBe(2);
    expect(callback.mock.calls[2][0]).toBe(3);
  });
});
