import validAdmin from "../fixtures/validAdmin.json";
import invalidAdmin from "../fixtures/invalidAdmin.json";
import selectors from "../fixtures/selectors.json";

describe("Should show the correct display of the admin page", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("must log in", () => {
    cy.get(selectors.email).type(validAdmin.login);
    cy.get(selectors.password).type(validAdmin.password);
    cy.get(selectors.loginButton).click();
    cy.contains(selectors.hallManagement).should("be.visible");
  });

  it("should authorization error", () => {
    cy.get(selectors.email).type(invalidAdmin.login);
    cy.get(selectors.password).type(invalidAdmin.password);
    cy.get(selectors.loginButton).click();
    cy.contains(selectors.authorisationError).should("be.visible");
  });
});
