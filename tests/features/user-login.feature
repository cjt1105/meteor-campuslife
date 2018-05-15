Feature: User Login

Background: User is registered
Given the user has previously registerd for the site

  Scenario: Login as a user
    Given the user is on the login page
    When the user inputs an email address
    And the user inputs the correct password
    Then the user should be logged in
    And the user should be redirected to thier dashboard
    And should be presented with success message