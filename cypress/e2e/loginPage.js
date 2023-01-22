// Class (template) for a Page object pattern
class LoginPage {
  // - Init / Constructor

  constructor() {}

  // - Load URL for the page

  visit() {
    cy.visit("http://localhost:3000");
  }

  // - Show alert button

  getShowAlertButton() {
    return cy.get('[data-cy="show-alert-button"]');
  }

  // - Username

  getUsernameLabel() {
    return cy.get('[data-cy="login-form-username-label"]');
  }

  getUsernameTextField() {
    return cy.get('[data-cy="login-form-username-textfield"]');
  }

  typeUsername(username) {
    var usernameTextField = this.getUsernameTextField();
    usernameTextField.type(username);
  }

  // - Password

  getPasswordLabel() {
    return cy.get('[data-cy="login-form-password-label"]');
  }

  getPasswordTextField() {
    return cy.get('[data-cy="login-form-password-textfield"]');
  }

  typePassword(password) {
    var passwordTextField = this.getPasswordTextField();
    passwordTextField.type(password);
  }

  // - Submit button

  getSubmitButton() {
    return cy.get('[data-cy="login-form-submit-button"]');
  }

  clickSubmit() {
    var submitButton = this.getSubmitButton();
    submitButton.click();
  }

  // - Other

  // TODO: Click something and return a page object for the new page
  goToNewPage() {}
}

// Note. make page accessible / public to other Javascript module code
export default LoginPage;
