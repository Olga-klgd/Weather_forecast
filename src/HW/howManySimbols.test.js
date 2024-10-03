import { howManySimbols } from "./howManySimbols.js";

describe("howManySimbols", () => {
  it("should be a function", () => {
    expect(howManySimbols).toBeInstanceOf(Function);
  });
});

describe("howManySimbols", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { str1: "asdfgh", str2: "asdfgh", result: 12 },
    { str1: "asdh", str2: "asdfgh", result: 10 },
    { str1: "h", str2: "asdfgh", result: 7 },
  ].forEach(({ str1, str2, result }) => {
    it(`prints '${result}' for ${str1} and ${str2}`, () => {
      const logSpy = jest.spyOn(console, "log");

      howManySimbols(str1, str2);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
