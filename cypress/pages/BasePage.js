class BasePage {

loginPopup = "#loginPopup";
cartBtn = ".top-panel__userbar__cart__item";
topPanel = ".top-panel__hnav__li_r";
mainTitle = ".main-title";
callRequest = ".modalbox-content";
confirmBtn = ".big-btn-confirm";


  checkLoginPopup()
  {
    cy.get(this.cartBtn).click();
    cy.get(this.loginPopup).should("exist");
  }

  selectTopPanelOption(option, title)
  {
    cy.get(this.topPanel).siblings().should('have.length', 7);
    cy.get(this.topPanel).contains(option).click();
    cy.get(this.mainTitle).contains(title).should('have.text', title)
  }

    checkLoginPopup()
  {
    cy.get(this.cartBtn).click();
    cy.get(this.loginPopup).should("exist");
  }
}

export default BasePage;