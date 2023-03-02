import SouvenirPage from "../../pages/SouvenirPage";

let userdata
let souvenirPage 

describe('example ', () => {
  beforeEach(() => {
    cy.visit('https://oz.by/souvenir/');
    souvenirPage = new SouvenirPage();
    cy.fixture('example').then((data)=>{
        userdata=data
    })
  })

  it('bestsellers', () => {
    souvenirPage.checkBestsellers(userdata.bestsellers);
  })

  it('souvenir Header', () => {
    souvenirPage.checkHeader(userdata.souvenirHeader);
  })

  it('souvenir Header', () => {
    souvenirPage.checkHeader(userdata.souvenirHeader);
  })
  
})