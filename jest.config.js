module.exports = {
    testEnvironment: "jest-environment-jsdom-fifteen",
    globals: {
        crypto: require("crypto")
    },
    coverageReporters: [["lcov", {"projectRoot": "../../"}]]
};
