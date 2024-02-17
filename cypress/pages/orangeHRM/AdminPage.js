class AdminPage{

    clickOnAddAdminUserButton(){
        cy.get(".orangehrm-header-container > .oxd-button").should('have.text',' Add ').click();
    }
}
export default AdminPage;