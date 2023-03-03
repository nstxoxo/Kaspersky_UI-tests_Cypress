import SouvenirPage from "../../pages/SouvenirPage";

let pagedata;
let souvenirPage;

describe("Souvenir page tests", () => {
  beforeEach(() => {
    cy.visit("https://oz.by/souvenir/");
    souvenirPage = new SouvenirPage();
    cy.fixture("pagedata").then((data) => {
      pagedata = data;
    });
  });

  it("Bestsellers link is displayed", () => {
    souvenirPage.checkBestsellers(pagedata.bestsellers);
  });

  it("Check Souvenir page header", () => {
    souvenirPage.checkMainHeader(pagedata.souvenirHeader);
  });

  it("Check bijouterie header", () => {
    souvenirPage.checkFilter(pagedata.bijouterie);
    souvenirPage.checkHeader(pagedata.bijouterie);
  });
});
