describe("Tests user inputs", () => {
    beforeEach(function () {
        // runs before each test in this block
    cy.visit("http://localhost:3000");
    });

    it("Locates / tests the name input", () => {
        cy.get("[name=name]") 
            .type("Ciomara Chavez de Oliver")
            .should("have.value", "Ciomara Chavez de Oliver");
    });   

    it("Locates / tests the email input", () => {
        cy.get("[name=email]")
            .type("cioma@mail.com")
            .should("have.value", "cioma@mail.com");
    });

    it("Locates / tests the password input", () => {
        cy.get("[name=password]")
            .type("abc123")
            .should("have.value", "abc123");
    });

    it("Locates / tests the terms checkbox", () => {
        cy.get("[name=terms]")
            .check()
            .should("be.checked");
    });

    it("Tests for form submission capability", () => {
        cy.get("form")
            .submit()
    });

    it("Tests for form validation in the absence of an input", () => {
        cy.get("[name=email]")
            .type("cioma@mail.com")
            .clear()
            cy.get("form")
            .submit()
            .get(".error")
    });

});
