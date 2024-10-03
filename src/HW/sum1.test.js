import { sum } from "./sum1.js";
import { mult } from "./sum1.js";
describe("sum", () => {
  it("should be a function", () => {
    expect(sum).toBeInstanceOf(Function);
  });
});

describe("sum", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 1, b: 2, result: 3 },
    { a: 3, b: 2, result: 5 },
    { a: 1, b: 5, result: 6 },
  ].forEach(({ a, b, result }) => {
    it(`prints '${result}' for ${a} and ${b}`, () => {
      const logSpy = jest.spyOn(console, "log");
      sum(a, b);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});

describe("mult", () => {
  it("should be a function", () => {
    expect(mult).toBeInstanceOf(Function);
  });
});
describe("mult", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 1, b: 2, result1: 2 },
    { a: 3, b: 2, result1: 6 },
    { a: 1, b: 5, result1: 5 },
  ].forEach(({ a, b, result1 }) => {
    it(`prints '${result1}' for ${a} and ${b}`, () => {
      const logSpy1 = jest.spyOn(console, "log");
      mult(a, b);
      expect(logSpy1).toHaveBeenCalledWith(result1);
    });
  });
});
