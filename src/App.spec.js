describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  cy.get("cy.get(':nth-child(4) > .todo__title')").should(($div) => {
    const text = $div.text();

    expect(text).to.match(/foo/);
    expect(text).to.include("foo");
    expect(text).not.to.include("bar");
  });
});
