describe('Produtos API', () => {
    it('Deve retornar lista de produtos', () => {
      cy.request('GET', 'https://serverest.dev/produtos').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.quantidade).to.be.greaterThan(0)
        expect(res.body.produtos).to.be.an('array')
      })
    })
  })
  