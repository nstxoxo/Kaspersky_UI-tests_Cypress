import BasePage from "./BasePage";

class SouvenirPage extends BasePage {
  souvenirHeader = ".landing-header__title";
  subnavListGroup = ".landing-subnav__link-text";
  filterSection = ".filters__group";
  breadcrumbsHeader = ".breadcrumbs__list__item";

  checkBestsellers(item) {
    cy.get(this.subnavListGroup).first().should("contain", item);
  }

  checkMainHeader(mainHeader) {
    cy.get(this.souvenirHeader).should("contain", mainHeader);
  }

  checkFilter(header) {
    cy.get(this.filterSection)
      .contains(header)
      .click()
      .should("contain", header);
  }

  checkHeader(header) {
    cy.get(this.breadcrumbsHeader).should("contain", header);
  }
}
export default SouvenirPage;
