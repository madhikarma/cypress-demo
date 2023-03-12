describe("The App", () => {
    it("should render product card", () => {
        // Given
        cy.visit("http://localhost:3000");

        // When
        var image = cy.get('img')
        
        // Then
        image.should('be.visible')
        image.should('have.attr', 'src', '/static/media/Jordanlow2_1400x.0e81af5d0765dd76fda4.jpg')
    });
});
