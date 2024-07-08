const { generateText, checkAndGenerate } = require("./util");

test("should return name and age", () => {
  const test = generateText("tuhin", 29);
  expect(test).toBe("tuhin (29 years old)");
});

// intgration tests
test("should return name and age", () => {
  const test = checkAndGenerate("Tuhin", 29);
  expect(test).toBe("Tuhin (29 years old)");
});
