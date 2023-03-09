import MainPage from "../../pages/MainPage";

let pagedata;
let mainPage;
let page

describe("Main page tests", () => {
  beforeEach(() => {
    page = cy.visit("https://oz.by/");
    mainPage = new MainPage();
    cy.fixture("pagedata").then((data) => {
      pagedata = data;
    });
  });

  it("Сheck the book in the search field", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    mainPage.setInput(pagedata.request);
    mainPage.clickSearch();
    mainPage.checkResult(pagedata.request);
  });

  it("Add book to cart", () => {
    mainPage.checkBook();
    mainPage.addToCart(pagedata.alreadyInCart);
    mainPage.checkLoginPopup();
  });

  it("Сheck help page", () => {
    mainPage.checkSlider();
    mainPage.selectTopPanelOption(pagedata.help, pagedata.reference);
  });

  it("Сheck slider menu", () => {
    mainPage.checkSlider();
    mainPage.selectDropdown();
  });
});
