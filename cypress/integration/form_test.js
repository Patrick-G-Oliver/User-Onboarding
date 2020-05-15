describe("This is our first test!", () => {
    it("Should return true", () => {
        expect(true).to.equal(true);
    });
});

describe("Tests user inputs", () => {
    beforeEach(function () {
        // runs before each test in this block
    cy.visit("http://localhost:3000")
    });

    it("Locates / tests the name input", () => {
        cy.get("#name") 
            .type("Ciomara Chavez de Oliver")
            .should("have.value", "Ciomara Chavez de Oliver")
    });   

    it("Locates / tests the email input", () => {
        cy.get("#email")
            .type("cioma@mail.com")
            .should("have.value", "cioma@mail.com")
    });

    it("Locates / tests the password input", () => {
        cy.get("#password")
            .type("abc123")
            .should("have.value", "abc123")
    });

});