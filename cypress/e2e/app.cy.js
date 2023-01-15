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
  it("load new website when button is clicked", () => {
    // Load web page into browser i.e. launch web app
    cy.visit("http://localhost:3000");

    // Find <button> and click it
    cy.get('[data-cy="load-new-website-button"]').click();

    wait(10);

    // Assert
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("https://www.google.com");
    });
  });
});
