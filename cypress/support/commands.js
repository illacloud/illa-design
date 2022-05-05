// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands"

Cypress.Commands.add("skipMotion", (selector = "head", style) => {
  cy.get("html").then(() => {
    document.querySelector(selector).insertAdjacentHTML(
      "beforeend",
      `
        <style>
          /* Disable CSS transitions. */
          * { -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important; }
          /* Disable CSS animations. */
          * { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; }
          /* Reset values on non-opaque/offscreen framer-motion components. */
          *[style*="opacity"] { opacity: 1 !important; }
          *[style*="transform"] { transform: none !important; }
          /* Other custom values on framer-motion components. */
          ${style}
        </style>
      `,
    )
  })
})
