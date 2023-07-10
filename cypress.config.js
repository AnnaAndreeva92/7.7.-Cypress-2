const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iva5dt',
  e2e: {

    
    baseUrl:"http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
