describe("This is our first test!", () => {
    it("Should return true", () => {
        expect(true).to.equal(true);
    });
});

describe("Tests user inputs", () => {
    beforeEach(function () {
        // runs before each test in this block
    cy.visit("http://localhost:3000")
    })

    it("Locates the name input", () => {
        cy.get('#name') 
            .type("Ciomara Chavez de Oliver")
            .should("have.value", "Ciomara Chavez de Oliver")
    }) 

});