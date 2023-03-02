import BasePage from "./BasePage";

class SouvenirPage extends BasePage{
  
  souvenirHeader = ".landing-header__title";
  subnavListGroup = ".landing-subnav__link-text";


 
  checkBestsellers(item)
  {
    cy.get(this.subnavListGroup).first().should('contain', item)
    
  }

  checkHeader(header)
  {
    cy.get(this.souvenirHeader).should('contain', header)
    
  }

}
export default SouvenirPage;