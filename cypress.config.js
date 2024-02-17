const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout:6000,
  projectId:"OrangeHRM",
  reporter: "mochawesome",
  retries:{
    runMode: 1,
   // openMode: 0,
  },
  screenshotOnRunFailure: true,
  screenshotsFolder:"test-report/reports/screenshots",
  video: true,
  videosFolder:"test-report/reports/videos",
  videoCompression: true,
  trashAssetsBeforeRuns: true,
  env: {
    url:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
