/// <reference types="cypress" />

import  LoginPage  from '../../pages/orangeHRM/LoginPage'

  var globalTestData; 
 
 describe("Orange HRM login feature",()=>{
    before(()=>{
        
        cy.fixture("testdata").then((testData)=>{
            cy.log({testData});
            globalTestData = testData;
            cy.log({globalTestData});
        });
    })
   
    it.only("Verify login in orangeHRM with valid credentials",()=>{
        const loginPage = new LoginPage();
        loginPage.visitOrangeHRM(globalTestData);
        loginPage.login(globalTestData.username, globalTestData.password);
    })
 })