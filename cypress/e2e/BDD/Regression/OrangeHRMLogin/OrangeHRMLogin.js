import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  LoginPage  from '../../../../pages/orangeHRM/LoginPage';

var globalTestData; 

const loginPage = new LoginPage();

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
    cy.log("verify user is able to login into orangeHRM portal..!")
})
