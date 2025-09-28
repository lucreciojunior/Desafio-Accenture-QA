
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    fixturesFolder: 'cypress/fixtures',
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000,   
    pageLoadTimeout: 120000,        
    video: false,
    reporterOptions: {
      filterLog: (msg) => !msg.includes('fetch') && !msg.includes('xhr'),
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    }
  }
});
