module.exports ={
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv:["<rootDir>/jest.setup.js"],
    //TabItem flowbite ignored in a test because is different type module for jest 
    moduleNameMapper: {
        "^flowbite-react/lib/esm/components/Tab/TabItem$": "identity-obj-proxy"
      }
}

