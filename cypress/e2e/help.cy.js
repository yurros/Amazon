// <reference types="cypress" />

//describe("learning test of microsoft");

describe("Sign up", () => {
  let email;
  let username;

  it("should register user", () => {
    // open https://microsoft.com/
    cy.visit("https://microsoft.com/");

    // click Sign Up link in app header
    cy.get('.navbar a[href$="/register"]').click();

    // url should be /#/register
    cy.url().should("include", "/#/register");

    // page heading should be Sign up
    cy.get(".auth-page h1").should("have.text", "Sign up");

    // page should have form
    cy.get(".auth-page form").should("be.visible");

    // generate random integer from 1000 to 9999
    const rnd = Math.round(Math.random() * 8999) + 1000;

    // username was not registered before
    username = "user_" + rnd;

    // email was not registered before
    email = username + "@gmail.com";

    // type username form field
    cy.get(".auth-page form input[ng-model$=username]").type(username);
    // type email form field
    cy.get(".auth-page form input[ng-model$=email]").type(email);
    // password should be with pattern [0-9a-zA-Z_]{6, 16}
    // type password form field
    cy.get(".auth-page form input[ng-model$=password]").type("xyzXYZ123_");

    // click on Sign up button
    cy.get(".auth-page form button[type=submit]").click();

    // header should contain {username}
    cy.get(".navbar").should("contain.text", username);
  });
});
