module.exports = {
  moduleFileExtensions: ["js", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.vue$": "<rootDir>/node_modules/@vue/vue3-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
};
