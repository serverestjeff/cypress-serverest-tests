describe('Login API', () => {
    it('Deve logar com sucesso', () => {
      cy.request('POST', 'https://serverest.dev/login', {
        email: 'jeffpydev@gmail.com',
        password: '130724'
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.message).to.eq('Login realizado com sucesso')
        expect(res.body.authorization).to.exist
      })
    })
  })
  
