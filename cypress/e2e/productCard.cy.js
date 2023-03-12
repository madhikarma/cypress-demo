describe("The Product Card", () => {
  it("should render product card", () => {
    // Given
    cy.visit("http://localhost:3000");

    // When
    var productCard = cy.get(".productCard");

    // Then
    productCard.should("be.visible");
  });

  it("should render product card image", () => {
    // Given
    cy.visit("http://localhost:3000");

    // When
    var image = cy.get("img");

    // Then
    image.should("be.visible");
    image.should(
      "have.attr",
      "src",
      "/static/media/Jordanlow2_1400x.0e81af5d0765dd76fda4.jpg"
    );
  });

  it("should render product card name", () => {
    // Given
    cy.visit("http://localhost:3000");

    // When
    var name = cy.get(".productCardName");

    // Then
    name.should("be.visible");
    name.should("have.text", "Nike Air Jordans");
  });
});
