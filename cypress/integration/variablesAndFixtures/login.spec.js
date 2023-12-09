/// <reference types="Cypress" />


context('Variables',()=>{
    //primero se define la url, en este caso toma la baseUrl+ cy.visit.
    beforeEach(()=>{
        cy.visit('/');
    });

    it('Test #1 : Contraseñas incorrectas',()=>{

        cy.fixture('credenciales').as('credenciales');
        cy.get('@credenciales').then((credenciales)=>{
            credenciales.usuarios.forEach(usuario=>{
                credenciales.password.forEach(pass=>{
                    cy.get('input[name="UserName"]').type(usuario);
                    cy.get('input[name="Password"]').type(pass);
                    cy.get('#login').click();
                    cy.contains('Welcome, '+ usuario + '!')               
                })
            })
        });

       
    });
});