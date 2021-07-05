Feature: Background Feature

  Background: Loggged In
    Given I am login page
    Then I enter username "<username>"
    Then I enter password "<password>"
    Then I click on login button

  Scenario Outline: Admin Functionality
    Given I clicked Admin link
    Then I entered admin username"<adminusername>"

    Examples: 
      | adminusername |
      | amit          |

  Scenario Outline: Leave Functionality
    Given I clicked on Leave tab
    Then I enter leave employee name "<leaveempname>"

    Examples: 
      | leaveempname |
      | amit         |
