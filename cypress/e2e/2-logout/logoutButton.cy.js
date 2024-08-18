describe("Noroff logout button test", () => {
  it("should logout when clicking the logout button", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("button[data-auth='login']").last().click();
    cy.wait(500);
    cy.get("input#loginEmail").type("fridafever@stud.noroff.no");
    cy.get("input#loginPassword").type("123456789");
    cy.get(".modal-footer").contains("Login").click();
    cy.get("h4.profile-name").should("contain.text", "Frida");
    cy.get("button[data-auth='logout']").click();
    cy.wait(500);
    cy.get("form#registerForm").should("exist");
    cy.window().then((window) => {
      const token = window.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
