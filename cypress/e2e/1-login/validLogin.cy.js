describe("Noroff valid login form test", () => {
  it("should login with valid credentials", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("button[data-auth='login']").last().click();
    cy.wait(500);
    cy.get("input#loginEmail").type("fridafever@stud.noroff.no");
    cy.get("input#loginPassword").type("123456789");
    cy.get(".modal-footer").contains("Login").click();
    cy.get("h4.profile-name").should("contain.text", "Frida");
  });
});
