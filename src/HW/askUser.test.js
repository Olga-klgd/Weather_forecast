import { askUser1 } from "./askUser.js";

describe("askUser1", () => {
  it("should be a function", () => {
    expect(askUser1).toBeInstanceOf(Function);
  });
});

describe("askUser1", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { numberUser: 123, summa: 6 },
    { numberUser: 244, summa: 10 },
    { numberUser: 111, summa: 3 },
  ].forEach(({ numberUser, summa }) => {
    it(`prints '${summa}' for '${numberUser}' `, () => {
      const logSpy = jest.spyOn(console, "log");
      askUser1(numberUser);
      expect(logSpy).toHaveBeenCalledWith(summa);
    });
  });
});
