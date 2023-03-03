import BooksPage from "../../pages/BooksPage";

let pagedata;
let booksPage;
let page;

describe("Book page tests", () => {
  beforeEach(() => {
    page = cy.visit("https://oz.by/books/");
    booksPage = new BooksPage();
    cy.fixture("pagedata").then((data) => {
      pagedata = data;
    });
  });

  it("Сheck the book according to the set parameters", () => {
    booksPage.setYear();
    booksPage.setCover();
    booksPage.setLanguage();
    booksPage.clickApplyBtn();
    booksPage.checkTopFilter();
  });

  it("Check books list", () => {
    booksPage.checkBooksList();
    booksPage.checkBooks(pagedata.fiction);
    booksPage.checkBooks(pagedata.fantasyScienceFiction);
  });

  it("Validating author input and result", () => {
    booksPage.checkFirstAuthor();
    booksPage.setAuthor(pagedata.AgathaChristie);
    booksPage.clickApplyBtn();
    booksPage.checkTopFilter();
  });
});
