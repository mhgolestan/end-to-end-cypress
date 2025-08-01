const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    env: {
      BACKEND: 'http://localhost:3001/api'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.USERNAME = process.env.USERNAME;
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
  },
});
