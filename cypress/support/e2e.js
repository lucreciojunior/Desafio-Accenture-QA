// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************


import './commands'
import 'cypress-plugin-api';
import 'cypress-wait-until';   
import '@4tw/cypress-drag-drop';
import "cypress-real-events";
import '@shelex/cypress-allure-plugin';


// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}



// Desabilita logs de XHR/fetch
Cypress.on('uncaught:exception', () => false); // evita falhar por erros de terceiros

// Intercepta tudo sem logar
Cypress.Commands.overwrite('intercept', (orig, ...args) => {
  if (typeof args[1] === 'string') {
    return orig(args[0], args[1], { ...args[2], log: false });
  }
  return orig(...args);
});

