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

  it("should render product card price", () => {
    // Given
    cy.visit("http://localhost:3000");

    // When
    var price = cy.get("[data-cy=product-card-price]");

    // Then
    price.should("be.visible");
    price.should("have.text", "£39.99");
  });

  it("should render product card sale price", () => {
    // Given
    cy.visit("http://localhost:3000");

    // When
    var salePrice = cy.get("[data-cy=product-card-sale-price]");

    // Then
    salePrice.should("be.visible");
    salePrice.should("have.text", "£35.99");
  });

  it("should render product card on sale label", () => {
    // Given
    cy.visit("http://localhost:3000");

    // When
    var salePrice = cy.get("[data-cy=product-card-sale-label]");

    // Then
    salePrice.should("be.visible");
    salePrice.should("have.text", "SALE");
  });

  it("should render product card description", () => {
    // Given
    cy.visit("http://localhost:3000");

    // When
    var salePrice = cy.get("[data-cy=product-card-description]");

    // Then
    salePrice.should("be.visible");
    salePrice.should(
      "have.text",
      "Some description about these Nike Jordan sneakers."
    );
  });

  it("should visit store URL when image is clocked", () => {
    // Given
    cy.visit("http://localhost:3000");

    // When
    var image = cy.get("img");
    image.should("be.visible");
    var imageLink = cy.get("a");
    imageLink.click();

    // Then
    var didLoad = false;
    cy.url().then((url) => {
      // Note. due to redirects lots of URLs will load so we check each one
      if (url.toString().includes("nike.com")) {
        didLoad = true;
      } else {
        didLoad = false;
      }
    });
    expect(isLoaded, true);
  });
});
