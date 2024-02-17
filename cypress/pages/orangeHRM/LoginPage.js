class LoginPage {


    login(username, password){
        cy.get("input[name='username']").type(username);
        cy.get("input[name='password']").type(password);
        cy.get("button[type='submit']").click();
    }

    visitOrangeHRM(testData){
        let env =   Cypress.env("ExecutionEnvironment");
        cy.log("********* Cypress test execution is started on "+ env +" ***********");
        cy.visit(testData.executionEnvironment[env]);
    }


}
export default LoginPage;