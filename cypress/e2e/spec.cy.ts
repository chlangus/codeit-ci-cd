describe("cyTest", () => {
  beforeEach(() => cy.visit("http://localhost:3000/"));

  it("should contain element4 test", () => {
    cy.get("p").contains("Get started by editing").should("exist");
  });

  it('should contain "Docs" heading anchor with correct href prop', () => {
    cy.contains("Docs")
      .should("have.attr", "href")
      .and("include", "https://nextjs.org/docs");
  });
});
