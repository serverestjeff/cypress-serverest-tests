describe('Cadastro de Usuário', () => {
    it('Deve cadastrar um novo usuário com sucesso', () => {
      cy.visit('https://front.serverest.dev/cadastrarusuario')
      const random = Date.now()
      cy.get('[data-testid=nome]').type('Usuário Teste')
      cy.get('[data-testid=email]').type(`teste${random}@gmail.com`)
      cy.get('[data-testid=password]').type('130724')
      cy.get('[data-testid=checkbox]').check()
      cy.get('[data-testid=cadastrar]').click()
      cy.contains('Cadastro realizado com sucesso').should('be.visible')
    })
  })
  
