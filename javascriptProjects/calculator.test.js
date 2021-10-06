const resultRootSquare = require("./calculator");
/* const resultSum = require("./calculator");
const resultRest = require("./calculator");
const resultMult = require("./calculator");
const resultDiv = require("./calculator");
const formatNumberArray = require("./calculator");
const valorationNumber = require("./calculator"); */

describe("Calculator.js valoration", () => {
  describe("When we use the resultRootSquare function, ", () => {
    debugger;
    test("if we give the value 144, it returns 12.", () => {
      const testValue = 144;
      const expected = 12;

      const result = resultRootSquare(testValue);

      expect(result).toBe(expected);
    });
  });
});
