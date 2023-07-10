import validAdmin from "../fixtures/validAdmin.json";
import selectors from "../fixtures/selectors.json";
import movie from "../fixtures/movie.json";

describe("admin page", () => {
  beforeEach(() => {
    cy.visit("/admin/");
    cy.get(selectors.email).type(validAdmin.login);
    cy.get(selectors.password).type(validAdmin.password);
    cy.get(selectors.loginButton).click();
  });

  it("Should create a new hall", () => {
    cy.contains(selectors.hallManagement).should("be.visible");
    cy.contains("Создать зал").click();
    cy.get(selectors.hallAddingForm).type(selectors.halllName);
    cy.contains("Добавить зал").click();
  });

  /*it("Should add a movie", () => {
    cy.get(movie.addMovie).click();
    cy.get(movie.title).type(movie.movieTitle);
    cy.get(movie.duration).type(movie.movieDuration);
    cy.get(movie.description).type(movie.filmDescription);
    cy.get(movie.counrty).type(movie.countryMovie);
    cy.get(movie.addButton).click();
    cy.get('[value="Загрузить постер"]').click ();
    cy.get('[value="Загрузить постер"]').attachFile('../fixtures/images.png')
   
    */
});
