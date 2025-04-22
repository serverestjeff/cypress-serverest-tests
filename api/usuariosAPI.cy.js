describe('Usuários API', () => {
    it('Deve criar um novo usuário', () => {
      const random = Date.now()
      cy.request('POST', 'https://serverest.dev/usuarios', {
        nome: 'Usuário API',
        email: `api${random}@email.com`,
        password: '123456',
        administrador: 'true'
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      })
    })
  })
  