import { whenFalse, whenTrue } from "./func";

describe("whenTrue", () => {
  it("should be true", () => {
    const fun = jest.fn();
    const add1 = whenTrue(fun);
    add1(true);
    expect(fun).toBeCalled();
    expect(fun).toBeCalledTimes(1);
  });

  it("should be false", () => {
    const fun = jest.fn();
    const fn = whenTrue(fun);
    fn(false);
    expect(fun).not.toBeCalled();
  });
});

describe("whenFalse", () => {
  it("should arg is false", () => {
    const fun = jest.fn();
    const fn = whenFalse(fun);
    fn(false);
    expect(fun).toBeCalled();
    expect(fun).toBeCalledTimes(1);
  });

  it("should arg is true", () => {
    const fun = jest.fn();
    const fn = whenFalse(fun);
    fn(true);
    expect(fun).not.toBeCalled();
  });
});
