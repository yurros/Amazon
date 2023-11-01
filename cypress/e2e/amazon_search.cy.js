describe("Searching", () => {
  it("should search for some things", () => {
    // open https://www.amazon.com/
    cy.visit("https://www.amazon.com/");

    // open registration form
    cy.get(".nav-line-1-container").should("be.visible").click();

    // assertion page sign in
    cy.url().should("include", "/ap/signin");

    // create email

    cy.get("input#continue.a-button-input").click();

    // enter password
    cy.get("input#ap_password").type("Tarakan");
    cy.get("input#signInSubmit").click();

    // Choise "today's deals" in bar
    cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').should("be.visible").click();

    // choise of airburne
    cy.get('a[href$="dlx_deals_gd_dcl_img_8_e95a5dd8_dt_sl14_dc"]').click();
    //Add to cart
    cy.get("#dealsx_atc_btn-announce").should("be.visible").click();
  });

  it.only("should search readbook", () => {
    // open https://www.amazon.com/
    cy.visit("https://www.amazon.com/");

    // open menu "All" in bar
    cy.get(".hm-icon-label").click();

    // open menu "Kindle E-readers & Books" in menu "Digital Content & Devices"
    cy.get(".hmenu-visible > :nth-child(3) > .hmenu-item ")
      .should("be.visible")
      .click();
    //open menu "Kindle" in menu "Kindle E-Readers"

    cy.get(":nth-child(31) > :nth-child(4) > .hmenu-item")
      .should("be.visible")
      .click();
  });
});
