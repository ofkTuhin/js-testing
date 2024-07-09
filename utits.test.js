const { generateText, checkAndGenerate } = require("./util");
const puppeteer = require("puppeteer");

test("should return name and age", () => {
  const test = generateText("tuhin", 29);
  expect(test).toBe("tuhin (29 years old)");
});

// intgration tests
test("should return name and age", () => {
  const test = checkAndGenerate("Tuhin", 29);
  expect(test).toBe("Tuhin (29 years old)");
});

// e2e testing
test("should click and show list of users", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80, // slow down for testing
    args: ["--window-size=1920.1080"],
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("http://127.0.0.1:5500/index.html");

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  await page.type("#name", "pavel");
  await page.type("#age", "28");
  await page.click("#btnAddUser");
  const userListText = await page.$eval(".user-list", (el) => el.textContent);
  expect(userListText).toBe("pavel (28 years old)");
}, 10000);
