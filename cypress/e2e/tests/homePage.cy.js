import HomePage from "../../pages/HomePage";

let userdata;
let homePage;

describe("example ", () => {
  beforeEach(() => {
    cy.visit("https://oz.by/");
    homePage = new HomePage();
    cy.fixture("example").then((data) => {
      userdata = data;
    });
  });

  it("displays two ms by default", () => {
    homePage.setInput(userdata.request);
    homePage.clickSearch();
    homePage.checkResult(userdata.request);
  });

  it("check first book", () => {
    homePage.checkBook();
    homePage.addToCart(userdata.alreadyInCart);
    homePage.checkLoginPopup();
  });

  it("check help", () => {
    homePage.checkSlider();
    homePage.selectTopPanelOption(userdata.help, userdata.reference);
  });

  it("check slider", () => {
    homePage.checkSlider();
    homePage.selectDropdown();
  });
});
