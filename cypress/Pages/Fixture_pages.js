export const userField = () =>  cy.xpath("(//input[@name='name'])[1]")
export const emailField = () =>  cy.xpath("//input[@name='email']")
export const passwordField = () => cy.xpath("(//input[@class='form-control'])[1]")