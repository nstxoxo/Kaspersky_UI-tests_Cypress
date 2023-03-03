import SouvenirPage from "../../pages/SouvenirPage";

let userdata;
let souvenirPage;

describe("example ", () => {
  beforeEach(() => {
    cy.visit("https://oz.by/souvenir/");
    souvenirPage = new SouvenirPage();
    cy.fixture("example").then((data) => {
      userdata = data;
    });
  });

  it("bestsellers", () => {
    souvenirPage.checkBestsellers(userdata.bestsellers);
  });

  it("souvenir Header", () => {
    souvenirPage.checkMainHeader(userdata.souvenirHeader);
  });

  it("bijouterie Header", () => {
    souvenirPage.checkFilter(userdata.bijouterie);
    souvenirPage.checkHeader(userdata.bijouterie);
  });
});
