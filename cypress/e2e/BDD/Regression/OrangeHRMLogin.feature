Feature: Orange HRM portal login Feature

@Smoke
Scenario: Verify login with valid Credential
Given visit to the orangeHRM portal
When user enter valid Credential 
Then verify user is able to login into orangeHRM portal