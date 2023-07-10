import homePage from "../fixtures/homePage.json";

describe("Should show correct display of the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should show correct title", () => {
    cy.get(homePage.title).should("have.text", "Идёмвкино");
  });

  it("shows 7 days", () => {
    cy.get(homePage.daysWeek).should("have.length", 7);
  });

  it("Should show correct number of films", () => {
    cy.get(homePage.chooseFilm).should("have.length", 3);
  });
});
