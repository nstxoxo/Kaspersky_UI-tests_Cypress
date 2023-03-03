import HomePage from "../../pages/HomePage";

let pagedata;
let homePage;
let page

describe("Home page tests", () => {
  beforeEach(() => {
    page = cy.visit("https://oz.by/");
    homePage = new HomePage();
    cy.fixture("pagedata").then((data) => {
      pagedata = data;
    });
  });

  it("Сheck the book in the search field", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    homePage.setInput(pagedata.request);
    homePage.clickSearch();
    homePage.checkResult(pagedata.request);
  });

  it("Add book to cart", () => {
    homePage.checkBook();
    homePage.addToCart(pagedata.alreadyInCart);
    homePage.checkLoginPopup();
  });

  it("Сheck help", () => {
    homePage.checkSlider();
    homePage.selectTopPanelOption(pagedata.help, pagedata.reference);
  });

  it("Сheck slider menu", () => {
    homePage.checkSlider();
    homePage.selectDropdown();
  });
});
