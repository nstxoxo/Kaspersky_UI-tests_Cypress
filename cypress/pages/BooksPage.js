import BasePage from "./BasePage";

class BooksPage extends BasePage {
  publishYearBlock = "#dd_si1";
  authorsBlock = "#dd_id_people";
  _2023year = "label[for='si1_2023']";
  _2022year = "label[for='si1_2022']";
  coverBlock = "#dd_ti3";
  hardСover = "label[for='ti3_4']";
  softСover = "label[for='ti3_2']";
  languageBlock = "#dd_v5";
  foreignLanguage = "label[for='v5_all']";
  applyBtn = ".filters__searchbtn__btn";
  topFilters = ".top-filters__viewer";
  landingHeaders = ".landing-nav-list__title";
  peopleSearchField = "#fm-input-ac-id_people";
  listPosition = ".fm-element-panel.filters__chkslist__li";
  authorFrame = ".ui-corner-all.dp-base";

  setYear() {
    cy.get(this.publishYearBlock).find(this._2023year).as("2023year");
    cy.get(this.publishYearBlock).find(this._2022year).as("2022year");
    cy.get("@2023year").click();
    cy.get("@2022year").click();
  }

  setCover() {
    cy.get(this.coverBlock).find(this.hardСover).as("hardСover");
    cy.get("@hardСover").click();
  }

  setLanguage() {
    cy.get(this.languageBlock).find(this.foreignLanguage).as("foreignLanguage");
    cy.get("@foreignLanguage").click();
  }

  clickApplyBtn() {
    cy.get(this.applyBtn).click();
  }

  checkTopFilter() {
    cy.get(this.topFilters).first().should("exist");
  }

  checkBooksList() {
    cy.get(this.landingHeaders).should("have.length", 5);
  }

  checkBooks(item) {
    cy.get(this.landingHeaders).contains(item).should("have.text", item);
  }

  checkFirstAuthor() {
    cy.get(this.authorsBlock).find(this.listPosition).first().click();
  }

  setAuthor(author) {
    cy.get(this.peopleSearchField).type(author);
    cy.get(this.authorFrame, { timeout: 12_000 }).should("be.visible").click();
  }
}

export default BooksPage;
