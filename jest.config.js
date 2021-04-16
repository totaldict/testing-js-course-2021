/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  //TODO Удалить эту настройку, когда примут тесты. Ток чтобы общий пайп проходил.
  setupFilesAfterEnv: ["./3-Unit-Testing/bad-architecture/tests/setupTests.js"],
};
