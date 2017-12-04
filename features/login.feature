@regression
Feature: Test Facebook smoke scenario
Background:
Given I am on the home page of facebook.com
Scenario: Test login with valid credentials
When I enter valid username 
And I enter valid password
Then user should be login successfully
