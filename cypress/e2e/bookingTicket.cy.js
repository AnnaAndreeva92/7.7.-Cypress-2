import seats from "../fixtures/seats.json";
import selectors from "../fixtures/selectors.json";

beforeEach(() => {
  cy.visit("/");
});

it("Should book a ticket", () => {
  cy.get(selectors.sessionDay).click();
  cy.get(selectors.chooseFilm).first().contains("10:00").click();

  seats.forEach((seat) => {
    cy.get(
      `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
    ).click();
  });
  cy.get(selectors.pushButton).click();
  cy.contains("Вы выбрали билеты:").should("be.visible");
});
