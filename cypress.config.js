const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
