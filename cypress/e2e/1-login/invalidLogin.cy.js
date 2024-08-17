describe("Noroff invalid login form test", () => {
  it("should not login with invalid credentials", () => {
    cy.visit("/");
    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login",
    ).as("loginRequest");
    cy.wait(500);
    cy.get("button[data-auth='login']").last().click();
    cy.wait(500);
    cy.get("input#loginEmail").type("invalidemail@noroff.no");
    cy.get("input#loginPassword").type("invalidpassword");
    cy.get(".modal-footer").contains("Login").click();
    cy.wait("@loginRequest").its("response.statusCode").should("eq", 401);
    cy.on("window:alert", (msg) => {
      expect(msg).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
