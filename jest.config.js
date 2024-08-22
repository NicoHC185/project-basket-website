/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx", "json", "node"],
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  roots: ["<rootDir>/test"],
  moduleDirectories: ["node_modules", "src"],
};
