const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("job", 1, "Joseph@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("job", 1, "Joseph@test.com", "GitHubUsername");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("job", 1, "Joseph@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});