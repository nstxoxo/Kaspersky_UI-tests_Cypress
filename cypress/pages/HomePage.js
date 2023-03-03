import BasePage from "./BasePage";

class HomePage extends BasePage {
  searchField = ".top-panel__search__input.ui-autocomplete-input";
  searchBtn = "button[class='top-panel__search__btn']";
  breadcrumbList = "li[itemprop='itemListElement']";
  weekBestsellers = ".mpgs-col-2";
  firstBookElement = ".listatic.li_0";
  addToCartBtn = ".first-button";
  sliderPagination = ".offers-slider__pagination__items";
  dropdownBox = "span[class='mpgs-cat__link__span']";

  setInput(request) {
    cy.get(this.searchField).type(request);
  }

  clickSearch() {
    cy.get(this.searchBtn).click();
  }

  checkResult(request) {
    cy.get(this.breadcrumbList).contains(request);
  }

  checkBook() {
    cy.get(this.firstBookElement).first().click();
  }

  addToCart(success) {
    cy.get(this.addToCartBtn).click();
    cy.get(".i-button__text").contains(success);
  }

  checkSlider() {
    cy.get(this.sliderPagination).children().should("have.length", 12);
  }

  selectDropdown() {
    cy.get(this.dropdownBox)
      .contains("Каталог товаров для дома")
      .should("exist");
  }
}

export default HomePage;
