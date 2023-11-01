describe("Sign in", () => {
  let email;
  let username;

  it("should navigate to the sign-in page", () => {
    // open https://www.amazon.com/
    cy.visit("https://www.amazon.com/");
    //  open registration form
    cy.get(".nav-line-1-container").click();
    //open form Create account
    cy.get("#createAccountSubmit").click();
    // generate random integer from 1000 to 9999
    const rnd = Math.round(Math.random() * 8999) + 1000;

    // username was not registered before
    const username = "alexesuar_" + rnd;
    // email was not registered before
    const email = username + "@gmail.com";

    //create user_name
    cy.get("#ap_customer_name").type(username);
    //create email
    cy.get("#ap_email").type(email);

    //enter password
    cy.get("#ap_password").type("Tarakan");
    //reenter password
    cy.get("#ap_password_check").type("Tarakan");
    cy.get("#continue.a-button-input").click();
    //cy.get(".a-button-inner > #continue").click();
  });
});
