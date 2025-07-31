const { defineConfig } = require("cypress");
dotenv = require('dotenv');
dotenv.config();
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.USERNAME = process.env.USERNAME;
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
  },
});
