import BasePage from "./BasePage";

class HomePage extends BasePage {
  searchField = ".top-panel__search__input.ui-autocomplete-input";
  searchBtn = ".top-panel__search__btn__item";
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
    cy.scrollTo(0, 500);
    cy.get(this.dropdownBox, { timeout: 12_000 })
      .contains("Каталог товаров для дома")
      .should("be.visible")
      .and("not.to.be.checked");
  }
}

export default HomePage;
