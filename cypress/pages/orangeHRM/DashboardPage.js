class DashboardPage {

    verifyDashboardPage(){
        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('have.text','Dashboard')
    }

    clickMenuByText(menuOption){
            cy.get("ul[class='oxd-main-menu'] li").contains(menuOption).click();
    }
}

export default DashboardPage;