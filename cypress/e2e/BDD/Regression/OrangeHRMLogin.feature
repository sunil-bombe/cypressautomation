Feature: Orange HRM portal login Feature

@Smoke
Scenario: Verify login with valid Credential
Given visit to the orangeHRM portal
When user enter valid Credential
Then verify user is able to login into orangeHRM portal


# Examples for parameterised step def files

@Regression
Scenario: Verify login with InValid Credential
Given visit to the orangeHRM portal
When user enter "Admin" as username and "admin234" as password
Then verify user is able to login into orangeHRM portal

# Examples for datatable step def 

@DataTableExample
Scenario: Verify user should be able to create user on Admin page
Given visit to the orangeHRM portal
When user enter valid Credential
Then verify user is able to login into orangeHRM portal
Then click on the "Admin" menu from the left menu-bar
When click on add admin user button
Then fill the form details
|userRole|employeeName |status |username     |password|confirmPassword|
|Admin   |Ganesh Gawade|Enabled|ganesh.gawade|Jan@2024|Jan@2024       |
Then click on save button from the admin page