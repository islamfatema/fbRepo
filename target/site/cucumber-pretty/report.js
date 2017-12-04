$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am on the home page of facebook.com",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnTheHomePageOfFacebookCom()"
});
formatter.result({
  "duration": 206856516,
  "error_message": "java.lang.NullPointerException\n\tat stepdefination.LoginSD.iAmOnTheHomePageOfFacebookCom(LoginSD.java:17)\n\tat ✽.Given I am on the home page of facebook.com(login.feature:3)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I enter valid username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSD.iEnterValidUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.iEnterValidPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSD.userShouldBeLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
});