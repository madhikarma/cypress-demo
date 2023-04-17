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
    image.should("have.attr", "src").then((url) => {
      // TODO: remove log
      console.log("Debug: image URL is: " + url);
      // Note. local image URL will be something like /static/media/nike-air-jordan.0e81af5d0765dd76fda4.jpg
      // So let's check it contains
      expect(url).to.include("nike-air-jordan");
      expect(url).to.include(".jpg");
    });
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
    price.invoke("css", "text-decoration").should("include", "line-through");
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
    var isLoaded = false;
    cy.url()
      .then((url) => {
        // TODO: remove log
        console.log("Debug: URL is: " + url.toString());
        // Note. due to redirects (i thikn) lots of URLs will load so we check each one
        if (url.toString().includes("nike.com")) {
          isLoaded = true;
        } else {
          isLoaded = false;
        }
      })
      expect(isLoaded, true);
  });
});
