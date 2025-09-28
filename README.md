# Desafio-Accenture-QA

Este projeto foi desenvolvido como parte de um **desafio técnico da Accenture**.  
O objetivo foi construir uma suíte de testes automatizados utilizando **Cypress** com boas práticas, como **Page Object Pattern**, **geração dinâmica de dados com Faker** e integração com **API e UI**.


cypress/
│
├─ e2e/ # Testes E2E
│ └─ flows
│ ├─ bookStoreFlow.cy.js
│ └─ ui/ # Testes de UI (Web)
│ ├─ browserWindows.cy.js
│ ├─ practiceForm.cy.js
│ ├─ progressBar.cy.js
│ ├─ sortable.cy.js
│ └─ webTables.cy.js
│
├─ fixtures/ 
│
├─ support/
│ ├─ api/ # Page Objects e fluxos de API
│ └─ pages/ # Page Objects para UI
│
└─ cypress.config.js # Configuração do Cypress

- [Cypress] → framework de testes
- [Page Object Pattern] → organização dos testes
- [faker-js] → geração dinâmica de usuários
- [cypress-plugin-api] → suporte a testes de API
- [cypress-wait-until] → waits condicionais
- [@4tw/cypress-drag-drop] → suporte a drag and drop
- [cypress-real-events] → eventos reais do browser (ex: mouse, teclado)

# Rodar testes interativos (Cypress GUI)
- npx cypress open

# Rodar um teste individual
- npx cypress run --spec "cypress/e2e/ui/webTables.cy.js"
  
#Rodar todos os testes (regressivo completo)
- npx cypress run


