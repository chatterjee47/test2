Feature: Login Feature

  @loginpage
  Scenario Outline: Login Functionality
    Given I am login page
    Then I enter username "<username>"
    Then I enter password "<password>"
    Then I click on login button
    And I verify the title of the page

    Examples: 
      | username | password |
      | Admin    | admin123 |

  @pimpage
  Scenario Outline: Login Functionality
   Given I am login page
    Then I enter username "<username>"
    Then I enter password "<password>"
    Then I click on login button
    Given I clicked on PIM tab
    Then I enter PIM Id "<pimid>"

    Examples: 
      | pimid  |
      | 228855 |
