module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleFileExtensions: ["js", "vue"],
  transform: {
    ".*\\.(js)$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/integration/setup-tests.js"],
};
