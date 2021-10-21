describe('Cypress First Test',()=>{
    it('Checks if Cypress is working properly',()=>{
        expect(true).to.equal(true)
    })
}) 

describe('Cypress False Test', () => { 
    it('Fails deliberately',()=>{
        expect(false).to.equal(false)
    })
})

describe('Website test', () => {
    it('Visits Google.com',()=>{
        cy.visit('https://youtube.com')
    })
})
