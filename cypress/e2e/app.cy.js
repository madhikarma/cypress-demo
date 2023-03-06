import LoginPage from "../pages/loginPage";

import {
  hasSelectionSupport,
  wait,
} from "@testing-library/user-event/dist/utils";

// Feature / Scenario 1 TODO think about how to organize
describe("The App", () => {
  // Test - loads
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

    // When
    let element = cy.contains("Edit src/App.js and save to reload.");

    // Then
    // 1. Find <p> label via contains and assert the text with should helper
    element.should("be.visible");

    // 2. Find <p> label via contains and assert the text with should + expect
    // element.should(($element) => {
    //   expect($element).to.be.visible;
    // });
  });

  // Test - login form
  it("show alert popup when username and password is entered and login form submit button is pressed", () => {
    // Given
    cy.visit("http://localhost:3000");
    var username = "david.bowie@mail.com";
    var password = "password";

    // When

    // Username
    var usernameInput = getUsernameInput();
    verifyInputText(usernameInput, "Username:");
    usernameInput.type(username);

    // Password
    var passwordInput = getPasswordInput();
    verifyInputText(usernameInput, "Password:");
    passwordInput.type(password);

    // Submit button:
    var submitButton = getSubmitButton();
    verifyInputSubmitButton(submitButton);
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.equal(
        "Login sent!\n" +
          "Username: " +
          username +
          "\n" +
          "Password: " +
          password
      );
    });
  });

  // Test 10 - login form (password is empty)
  it("show alert popup when username is empty and login form submit button is pressed", () => {
    // Given
    cy.visit("http://localhost:3000");
    var username = "david.bowie@mail.com";

    // When (type username and submit)
    var usernameInput = getUsernameInput();
    usernameInput.type(username);

    var submitButton = getSubmitButton();
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Error: Password is empty");
    });
  });

  // Test 10 - login form (username is empty)
  it("show alert popup when password is empty and login form submit button is pressed", () => {
    // Given
    cy.visit("http://localhost:3000");
    var password = "password";

    // When (type password and submit)
    var passwordInput = getPasswordInput();
    passwordInput.type(password);

    var submitButton = getSubmitButton();
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Error: Username is empty");
    });
  });

  // // Test 11 - page object example of test 10
  // it("(page object example) show alert popup when username and password is entered and login form submit button is pressed", () => {
  //   // Given
  //   const loginPage = new LoginPage();
  //   loginPage.visit();
  //   LoginPage;
  //   var username = "david.bowie@mail.com";
  //   var password = "password";

  //   // When
  //   loginPage.typeUsername(username);
  //   loginPage.typePassword(password);

  //   loginPage.clickSubmit();

  //   // Then
  //   cy.on("window:alert", (text) => {
  //     expect(text).to.contains("Login sent!");
  //     expect(text).to.contains("Username: " + username);
  //     expect(text).to.contains("Password: " + password);
  //   });
  // });

  // Utility functions

  function getUsernameLabel() {
    // return cy.get('[data-cy="login-form-username-label"]');
    return cy.contains("Username:");
  }

  function getUsernameInput() {
    // return cy.get('[data-cy="login-form-username-input"]');
    return cy.get("input").eq(0);
  }

  function getPasswordLabel() {
    // return cy.get('[data-cy="login-form-password-label"]');
    return cy.contains("Password:");
  }

  function getPasswordInput() {
    // return cy.get('[data-cy="login-form-password-input"]');
    return cy.get("input").eq(1);
  }

  function getSubmitButton() {
    // return cy.get('[data-cy="login-form-submit-button"]');
    return cy.contains("Submit");
  }

  function verifyInputText(inputElement, placeholder) {
    // inputElement.should("be.visible");
    // inputElement.should("have.attr", "type", "text");
    // inputElement.should("have.attr", "placeholder", placeholder);
    inputElement.should(($element) => {
      expect($element).to.be.visible;
      expect($element).to.have.attr("type", "text");
      expect($element).to.have.attr("placeholder", placeholder);
    });
  }

  function verifyInputSubmitButton(inputSubmitButton) {
    // inputSubmitButton.should("be.visible");
    // inputSubmitButton.should("have.attr", "type", "submit");
    // inputSubmitButton.should("have.value", "Submit");
    inputSubmitButton.should(($element) => {
      expect($element).to.be.visible;
      expect($element).to.have.attr("type", "submit");
      expect($element).to.have.value("Submit");
    });
  }
});
