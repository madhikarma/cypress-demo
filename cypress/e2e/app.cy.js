import LoginPage from "../pages/loginPage";

describe("The App", () => {
  // it("loads successfully", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.contains("Edit src/App.js and save to reload.");
  //   cy.contains("Show alert").click();
  //   cy.url().then((url) => {
  //     // - some logging TODO remove
  //     console.log(url.toString());
  //     // - Use "expect" assertion functions from the chai framework that comes with cypress
  //     expect(url.toString()).to.equal("https://www.lyst.com/");
  //   });
  // });

  it("show alert popup when username and password is entered and login form submit button is pressed", () => {
    // Given
    cy.visit("http://localhost:3000");
    var username = "david.bowie@mail.com";
    var password = "password";

    // When
    var usernameElement = getUsernameLabel();
    usernameElement.should("be.visible");
    usernameElement.type(username);

    var passwordElement = getPasswordLabel();
    verifyLabel(passwordElement, "Password:");
    passwordElement.type(password);

    var submitButton = getSubmitButton();
    submitButton.should("be.visible");
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

  it("show alert popup when password is empty", () => {
    // Given
    cy.visit("http://localhost:3000");
    var username = "david.bowie@mail.com";

    // When
    var usernameElement = getUsernameLabel();
    usernameElement.should("be.visible");
    usernameElement.type(username);

    var passwordElement = getPasswordInput();
    passwordElement.should("be.visible");
    passwordElement.should("be.empty");

    var submitButton = getSubmitButton();
    submitButton.should("be.visible");
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Error: Password is empty");
    });
  });

  it("show alert popup when username is empty", () => {
    // Given
    cy.visit("http://localhost:3000");
    var username = "david.bowie@mail.com";

    // When
    var usernameElement = getUsernameInput();
    usernameElement.should("be.visible");
    usernameElement.should("be.empty");

    var passwordElement = getPasswordInput();
    passwordElement.should("be.visible");
    passwordElement.type(username);

    var submitButton = getSubmitButton();
    submitButton.should("be.visible");
    submitButton.click();

    // Then
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Error: Username is empty");
    });
  });

  function getUsernameLabel() {
    return cy.contains("Username:");
  }

  function getUsernameInput() {
    return cy.get("#username");
  }

  function getPasswordLabel() {
    return cy.contains("Password:");
  }
  function getPasswordInput() {
    return cy.get("#password");
  }

  function getSubmitButton() {
    return cy.contains("Submit");
  }

  function verifyLabel(element, text) {
    element.should("be.visible");
    element.should("have.text", text);
  }
});
