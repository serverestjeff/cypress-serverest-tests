describe('Carrinho', () => {
    it('Deve adicionar produto ao carrinho', () => {
      cy.loginViaAPI() // comando customizado
      cy.visit('https://front.serverest.dev/home')
      cy.get('.card').first().contains('Comprar').click()
      cy.get('[data-testid=finalizar-compra]').click()
      cy.contains('Compra realizada com sucesso').should('be.visible')
    })
  })
  