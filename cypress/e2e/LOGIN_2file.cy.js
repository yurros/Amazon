describe("Sign in", () => {
  const email = "rosyury62@gmail.com";
  const username = "Tarakan";

  it("should navigate to the sign-in page", () => {
    // open https://amazon.com/
    cy.visit("https://www.amazon.com/");
    //  open registration form
    cy.get("#nav-link-accountList").click();
  });
});
