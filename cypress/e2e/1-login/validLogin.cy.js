describe("testing if user can login with valid credentials", () => {
  it("should login with valid credentials", () => {
    cy.visit("/");
    cy.get("form#registerform] button[data-auth=login]").click();
    cy.get("input[name=email]").type("fridafever@stud.noroff.no");
    cy.get("input[name=password]").type("123456789");
    cy.get("button[type=submit]").click();
    cy.get("h4.profile-name").should("contain.text", "Frida");
  });
});
