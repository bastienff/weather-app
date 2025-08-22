import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "^@/(.*)$": "<rootDir>/$1",
    },
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    verbose: true,
  };
};
