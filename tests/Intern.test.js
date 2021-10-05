const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Northwestern";
  const e = new Intern("job", 1, "Joseph@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("job", 1, "Joseph@test.com", "Northwestern");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Northwestern";
  const e = new Intern("job", 1, "Joseph@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});