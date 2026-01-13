describe('Iyzico Kulannıcı Oluşturma Denemesi', () => {
  it('Üyelik Bilgileri', () => {
    cy.visit('https://www.iyzico.com/isim-icin/hesap-olustur')
    cy.url().should('include', 'hesap-olustur')
    cy.get('[class="cc-nb-okagree"]').click()
    cy.get('[id="institutional-name"]').type('DenemeAd')
    cy.get('[id="institutional-surname"]').type('DenemeSoyad123')
    cy.get('[id="institutional-email"]').type('deneme@hotmail.com')
    cy.get('[id="institutional-phone"]').type('5465760406')
    cy.get('[class="c-custom-select__head"]').click()
    cy.get('[data-type="PHYSICALLY"]').click()
    cy.get('[id="institutional-taxno"]').type('4121093721')
    cy.get('[id="institutional-password"]').type(124398)
    cy.get('[for="kvkk-institutional"]').click()

  })
})
