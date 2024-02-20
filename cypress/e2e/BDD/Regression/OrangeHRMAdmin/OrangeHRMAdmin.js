import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  LoginPage  from '../../../../pages/orangeHRM/LoginPage';
import DashboardPage from "../../../../pages/orangeHRM/DashboardPage";
import AdminPage from "../../../../pages/orangeHRM/AdminPage";

var globalTestData; 

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const adminPage = new AdminPage();

Before(()=>{
    cy.fixture("testdata").then((testData)=>{
        cy.log({testData});
        globalTestData = testData;
        cy.log({globalTestData});
    });
})

Given("visit to the orangeHRM portal",()=>{
    loginPage.visitOrangeHRM(globalTestData);
})

When("user enter valid Credential",()=>{
    loginPage.login(globalTestData.username, globalTestData.password);
})

Then("verify user is able to login into orangeHRM portal",()=>{
    dashboardPage.verifyDashboardPage();
})

When("user enter {string} as username and {string} as password",(username, password)=>{
    loginPage.login(username, password);
})

Then("click on the {string} menu from the left menu-bar",(menuText)=>{
    dashboardPage.clickMenuByText(menuText);
})

When("click on add admin user button",()=>{
    adminPage.clickOnAddAdminUserButton();
})

Then("fill the form details",(dataTable)=>{
    cy.log( dataTable.rawTable[1][0] );
    cy.log( dataTable.rawTable[1][1] );
    cy.log( dataTable.rawTable[1][2] );
    cy.log( dataTable.rawTable[1][3] );
    cy.log( dataTable.rawTable[1][4] );
    cy.log( dataTable.rawTable[1][5] );
  
})

Then("click on save button from the admin page",()=>{
 cy.log("click on save button from the admin page...!")
})