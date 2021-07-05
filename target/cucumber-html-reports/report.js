$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("background.feature");
formatter.feature({
  "line": 1,
  "name": "Background Feature",
  "description": "",
  "id": "background-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Admin Functionality",
  "description": "",
  "id": "background-feature;admin-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I clicked Admin link",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I entered admin username\"\u003cadminusername\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "background-feature;admin-functionality;",
  "rows": [
    {
      "cells": [
        "adminusername"
      ],
      "line": 14,
      "id": "background-feature;admin-functionality;;1"
    },
    {
      "cells": [
        "amit"
      ],
      "line": 15,
      "id": "background-feature;admin-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12838116200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Loggged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "Admin Functionality",
  "description": "",
  "id": "background-feature;admin-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I clicked Admin link",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I entered admin username\"amit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "backgroundtest.i_clicked_Admin_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "amit",
      "offset": 25
    }
  ],
  "location": "backgroundtest.i_entered_admin_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 398698400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Leave Functionality",
  "description": "",
  "id": "background-feature;leave-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I clicked on Leave tab",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter leave employee name \"\u003cleaveempname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "background-feature;leave-functionality;",
  "rows": [
    {
      "cells": [
        "leaveempname"
      ],
      "line": 22,
      "id": "background-feature;leave-functionality;;1"
    },
    {
      "cells": [
        "amit"
      ],
      "line": 23,
      "id": "background-feature;leave-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11623232500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Loggged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 23,
  "name": "Leave Functionality",
  "description": "",
  "id": "background-feature;leave-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I clicked on Leave tab",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter leave employee name \"amit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "backgroundtest.i_clicked_on_Leave_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "amit",
      "offset": 29
    }
  ],
  "location": "backgroundtest.i_enter_leave_employee_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 294064500,
  "status": "passed"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Functionality",
  "description": "",
  "id": "login-feature;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify the title of the page",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-feature;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-feature;login-functionality;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 13,
      "id": "login-feature;login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10914547000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Functionality",
  "description": "",
  "id": "login-feature;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify the title of the page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 330078600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Login Functionality",
  "description": "",
  "id": "login-feature;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@pimpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I clicked on PIM tab",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter PIM Id \"\u003cpimid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-feature;login-functionality;",
  "rows": [
    {
      "cells": [
        "pimid"
      ],
      "line": 25,
      "id": "login-feature;login-functionality;;1"
    },
    {
      "cells": [
        "228855"
      ],
      "line": 26,
      "id": "login-feature;login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11151171200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login Functionality",
  "description": "",
  "id": "login-feature;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@pimpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I clicked on PIM tab",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter PIM Id \"228855\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "pimpagetest.i_clicked_on_PIM_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "228855",
      "offset": 16
    }
  ],
  "location": "pimpagetest.i_enter_PIM_Id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 304313000,
  "status": "passed"
});
});