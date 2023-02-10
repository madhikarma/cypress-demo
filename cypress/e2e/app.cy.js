import LoginPage from "../pages/loginPage";

import {
  hasSelectionSupport,
  wait,
} from "@testing-library/user-event/dist/utils";

// Feature / Scenario 1 TODO think about how to organize
describe("The App", () => {
  // Test 1
  it("loads successfully", () => {
    // Given

    // - Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");
  });

  // Test 2
  it("contains welcome text", () => {
    // Given

    // - Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // When / Then

    // - Find <p> label and assert the text
    cy.contains("Edit src/App.js and save to reload.");
  });

  // Test 3
  it("contains show alert button", () => {
    // Given

    // - Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // When

    // - Find <button> and assert the text
    cy.contains("button", "Show alert");

    // - Find <button> and click it
    // cy.get('button').click()

    // - Use ids as below (see src/App.js to edit the id)
    // cy.get('[data-cy="show-alert-button"]').click()

    // Then

    // - Assert alert popup
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Hello world");
    });
  });

  // Test 4
  it("shows alert when show alert button is clicked", () => {
    // Given

    // - Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // When

    // - Find <button> and click it
    cy.get('[data-cy="show-alert-button"]').click();

    // Then

    // - Assert alert popup
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Hello world");
    });
  });

  // Test 5
  /*
  it("load new website when button is clicked", () => {
    // Given

    // - Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // When

    // - Find <button> and click it
    cy.get('[data-cy="load-new-website-button"]').click();

    // Then

    // - Check URL location
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("https://www.google.com");
    });
  });
  */

  // Test 6
  it("show login form username label", () => {
    // Given

    // - Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // When

    // - 1. Find by id
    var usernameLabel = cy.get('[data-cy="login-form-username-label"]');
    // - 2. Find by HTML tag lookup
    // var usernameLabel = cy.contains("label", "Username:")

    // Then
    usernameLabel.should("have.text", "Username:");
  });

  // Test 7
  it("show login form password label", () => {
    // Given:

    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // When

    // - Find

    // - 1. Find by id
    var passwordLabel = cy.get('[data-cy="login-form-password-label"]');
    // - 2. Find by HTML tag lookup
    // var passwordLabel = cy.contains("label", "Password:")

    // Then
    passwordLabel.should("have.text", "Password:");
  });

  //   // Test 8
  //   it("show login form submit button", () => {
  //     // Load web page into browser i.e. launch web app
  //     cy.visit("http://localhost:3000");

  //     // When

  //     // - 1. Find by id
  //     var submitButton = cy.get('[data-cy="login-form-submit-button"]');
  //     // - 2. Find by HTML tag lookup
  //     // var submitButton = cy.contains("Submit");

  //     // Then
  //     submitButton.should("have.text", "Submit:");
  //   });

  // // Test 9
  // it("show alert popup when login form submit button is pressed", () => {
  //   // Given

  //   // - Load web page into browser i.e. launch web app
  //   cy.visit("http://localhost:3000");

  //   // When

  //   // - Find login form submit button
  //   var submitButton = cy.get('[data-cy="login-form-submit-button"]');
  //   submitButton.contains("Submit");
  //   submitButton.click();

  //   // Then

  //   // - Assert alert popup
  //   cy.on("window:alert", (text) => {
  //     expect(text).to.contains("Login sent!");
  //     expect(text).to.contains("Username:"); // Note. will be 'Username: undefined' until the app uses validation
  //     expect(text).to.contains("Password:"); // Note. will be 'Password: undefined' until the app uses validation
  //   });
  // });

  // Test 10 - login form
  it("show alert popup when username and password is entered and login form submit button is pressed", () => {
    // Given
    cy.visit("http://localhost:3000");
    var username = "david.bowie@mail.com";
    var password = "password";

    // When
    var usernameLabel = cy.get('[data-cy="login-form-username-label"]');
    usernameLabel.type(username);

    var passwordLabel = cy.get('[data-cy="login-form-password-label"]');
    passwordLabel.type(password);

    var submitButton = cy.get('[data-cy="login-form-submit-button"]');
    submitButton.contains("Submit");
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Login sent!");
      expect(text).to.contains("Username: " + username);
      expect(text).to.contains("Password: " + password);
    });
  });

  // Test 11 - page object example of test 10
  it("(page object example) show alert popup when username and password is entered and login form submit button is pressed", () => {
    // Given
    const loginPage = new LoginPage();
    loginPage.visit();
    LoginPage;
    var username = "david.bowie@mail.com";
    var password = "password";

    // When
    loginPage.typeUsername(username);
    loginPage.typePassword(password);

    loginPage.clickSubmit();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Login sent!");
      expect(text).to.contains("Username: " + username);
      expect(text).to.contains("Password: " + password);
    });
  });

  // Test 12 - should show username and password empty error message when login form is submitted
  it("should show username and password empty error message when login form is submitted", () => {
    // Given
    cy.visit("http://localhost:3000");
    var username = "david.bowie@mail.com";
    var password = "password";

    // When
    var submitButton = cy.get('[data-cy="login-form-submit-button"]');
    submitButton.contains("Submit");
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Error: Username and Password are empty");
    });
  });

  // Test 13 - should show username empty error message when login form is submitted
  it("should show username empty error message when login form is submitted", () => {
    // Given
    cy.visit("http://localhost:3000");
    var password = "password";

    // When
    var passwordLabel = cy.get('[data-cy="login-form-password-label"]');
    passwordLabel.type(password);

    var submitButton = cy.get('[data-cy="login-form-submit-button"]');
    submitButton.contains("Submit");
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Error: Username is empty");
    });
  });

  // Test 14 - should show password empty error message when login form is submitted
  it("should show password empty error message when login form is submitted", () => {
    // Given
    cy.visit("http://localhost:3000");
    var username = "david.bowie@mail.com";

    // When
    var usernameLabel = cy.get('[data-cy="login-form-username-label"]');
    usernameLabel.type(username);

    var submitButton = cy.get('[data-cy="login-form-submit-button"]');
    submitButton.contains("Submit");
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Error: Password is empty");
    });
  });
});
