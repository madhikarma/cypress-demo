import {
  hasSelectionSupport,
  wait,
} from "@testing-library/user-event/dist/utils";

// Feature / Scenario 1 TODO think about how to organize
describe("The App", () => {
  // Test 1
  it("loads successfully", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");
  });

  // Test 2
  it("contains welcome text", () => {
    // Given
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find <p> label and assert the text
    cy.contains("Edit src/App.js and save to reload.");
  });

  // Test 3
  it("contains show alert button", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find <button> and assert the text
    cy.contains("button", "Show alert");

    // Find <button> and click it
    // cy.get('button').click()
    // Use ids as below (see src/App.js to edit the id)
    // cy.get('[data-cy="show-alert-button"]').click()

    // Assert alert popup
    cy.on("window:alert", (text) => {
      //Mocha assertions
      expect(text).to.contains("Hello world");
    });
  });

  // Test 4
  it("shows alert when show alert button is clicked", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find <button> and click it
    cy.get('[data-cy="show-alert-button"]').click();

    // Assert alert popup
    cy.on("window:alert", (text) => {
      //Mocha assertions
      expect(text).to.contains("Hello world");
    });
  });

  // Test 5
  /*
  it("load new website when button is clicked", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find <button> and click it
    cy.get('[data-cy="load-new-website-button"]').click();

    // wait(10);

    // Assert
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("https://www.google.com");
    });
  });
  */

  // Test 6
  it("show login form username label", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find login form username label
    var usernameLabel = cy.get('[data-cy="login-form-username-label"]');
    usernameLabel.contains("Username:");
  });

  // Test 7
  it("show login form password label", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find login form password label
    var passwordLabel = cy.get('[data-cy="login-form-password-label"]');
    passwordLabel.contains("Password:");
  });

  // Test 8
  it("show login form submit button", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find login form submit button
    var submitButton = cy.get('[data-cy="login-form-submit-button"]');
    submitButton.contains("Submit");
  });

  // Test 9
  it("show alert popup when login form submit button is pressed", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find login form submit button
    var submitButton = cy.get('[data-cy="login-form-submit-button"]');
    submitButton.contains("Submit");
    submitButton.click();

    // Assert alert popup
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Login sent!");
      expect(text).to.contains("Username:"); // Note. will be 'Username: undefined' until the app uses validation
      expect(text).to.contains("Password:"); // Note. will be 'Password: undefined' until the app uses validation
    });
  });

  // Test 10
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
});
