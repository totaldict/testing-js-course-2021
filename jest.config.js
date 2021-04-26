/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  //TODO Удалить эту настройку, когда примут тесты. Ток чтобы общий пайп проходил.
  setupFilesAfterEnv: ["./3-Unit-Testing/bad-architecture/tests/setupTests.js"],
  testPathIgnorePatterns: [
    "<rootDir>/5-End-to-End-Testing/e2e-demo/",
    "<rootDir>/5-End-to-End-Testing/backend",
    "<rootDir>/4-Integration-Testing/isolation-demo"
  ],
};
