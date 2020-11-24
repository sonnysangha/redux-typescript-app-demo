describe("My First Test", () => {
  it("Visits the app & adds a todo", () => {
    cy.visit("localhost:3000");
    cy.get("input").type("Paint the car red");

    cy.get("button").click();

    cy.get(":nth-child(4) > .todo__title").should(($div) => {
      const text = $div.text();

      expect(text).to.equal("Paint the car red");
    });
  });
});
