const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'tdjb59',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern:"cypress/integration/testAPI/*.js",
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/"
  }
})