describe("Sign in", () => {
  let email;
  let username;

  it("should navigate to the sign-in page", () => {
    // open https://cnn.com/
    cy.visit("https://www.amazon.com/");

    cy.get("#nav-link-accountList").click();

    // generate random integer from 1000 to 9999
    const rnd = Math.round(Math.random() * 8999) + 1000;

    // username was not registered before
    const username = "alexesuar_" + rnd;

    // email was not registered before
    const email = username + "@gmail.com";
    //cy.url().should("include", " /ap/signin?*/");

    cy.get("#ap_email").type(email);
    cy.get(".a-button-inner > #continue").click();

    // url should be /#/register
    //cy.get(".a-spacing-small h1").should("have.text", "Sign in");
  });
});
