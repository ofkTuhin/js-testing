const { generateText } = require("./util");

test("should return name and age", () => {
  const test = generateText("tuhin", 29);
  expect(test).toBe("tuhin (29 years old)");
});
