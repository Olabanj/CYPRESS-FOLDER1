
///<reference types = "Cypress"/>
describe("sauce demo",function(){
    


   
    it("Get an elemenet",function(){
        cy.request("GET","https://reqres.in/api/users?page=2").then(response=>{
            cy.log(response.body)

        })


    })
    
    it("post an elemenet",function(){
        cy.request("POST","https://reqres.in/api/users",{
            "name": "morpheus",
            "job": "leader"
        

        }).then(response=>{
            cy.log(response.body)

        })


    })
})  