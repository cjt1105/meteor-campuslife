@watch
Feature: User Registration

  Scenario: Register as a user
    Given the user is on the registration page
    When the user inputs an email address
    And the user inputs a password
    And the user selects a university
    Then the user should be registered
    And the user should be redirected to thier dashboard
    And should be presented with success message