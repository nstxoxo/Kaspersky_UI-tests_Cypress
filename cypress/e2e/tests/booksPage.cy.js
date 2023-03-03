import BooksPage from "../../pages/BooksPage";

let userdata;
let booksPage;

describe("books ", () => {
  beforeEach(() => {
    cy.visit("https://oz.by/books/");
    booksPage = new BooksPage();
    cy.fixture("example").then((data) => {
      userdata = data;
    });
  });

  it("bestsellers", () => {
    booksPage.setYear();
    booksPage.setCover();
    booksPage.setLanguage();
    booksPage.clickApplyBtn();
    booksPage.checkTopFilter();
  });

  it("books list", () => {
    booksPage.checkBooksList();
    booksPage.checkBooks(userdata.fiction);
    booksPage.checkBooks(userdata.fantasyScienceFiction);
  });

  it("autors", () => {
    booksPage.checkFirstAuthor();
    booksPage.setAuthor(userdata.AgathaChristie);
    booksPage.clickApplyBtn();
    booksPage.checkTopFilter();
  });
});
