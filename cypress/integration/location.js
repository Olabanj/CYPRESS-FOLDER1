describe("demo",function(){
    before(function(){
cy.log(before)
    })

    beforeEach(function(){
    cy.log(beforeEach)
    })

    it("tc1",function(){
        console.log('TC1')
    })

    it("tc2",function(){
        console.log('TC2 ')
    })
})