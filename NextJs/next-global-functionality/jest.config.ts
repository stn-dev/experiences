export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: ["**/?(*.)+(test|spec).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};
