describe("HTML elements on index.html", function () {

    before(function () {
        cy.visit("index.html");
    });

    describe("Phase 1: Select by id", function () {

        it("use an id selector to bold a specified title without modifying the other titles", function () {
            cy.get("h1#page-title")
                .should("have.css", "font-weight", "700");
            cy.get("h1")
                .eq(1)
                .should("not.have.css", "font-weight", "700");
            cy.get("h2")
                .should("not.have.css", "font-weight", "700");
            cy.get("h3")
                .should("not.have.css", "font-weight", "700");
        });

    });

    describe("Phase 2: Select by class name", function () {

        it("use a class selector to add styles each page number", function () {
            cy.get("span.pagenum")
                .should("have.css", "position", "absolute")
                .should("have.css", "right", "10px")
                .should("have.css", "font-size", "13px");

            cy.get("span.smcap")
                .should("not.have.css", "position", "absolute")
                .should("not.have.css", "right", "10px")
                .should("not.have.css", "font-size", "13px");
        });

    });

    describe("Phase 3: Select by type", function () {

        before ( () => {
            cy.get("pre")
                .invoke("css", "margin-left")
                .as("marginLeft");

            cy.get("pre")
                .invoke("css", "margin-right")
                .as("marginRight");
        })

        it("use a type selector to justify the paragraph text", function () {
            cy.get("p")
                .should("have.css", "text-align", "justify");
            cy.get("div")
                .should("not.have.css", "text-align", "justify");
        });

        it("use a type selector to reduce the space between paragraphs", function () {
            cy.get("p")
                .should("have.css", "margin-top", "12px")
                .should("have.css", "margin-bottom", "12px");
            cy.get("div")
                .should("not.have.css", "margin-top", "12px")
                .should("not.have.css", "margin-bottom", "12px");
        });

        it("use a type selector to horizontally center the margins of the introduction and closing sections", function () {
            expect(parseInt(this.marginLeft)).not.equal(0)
            expect(parseInt(this.marginRight)).not.equal(0)
            expect(parseInt(this.marginLeft)).to.equal(parseInt(this.marginRight));
        });

        it("use a type selector to add space before and after introduction and closing", function () {
            cy.get("pre")
                .should("have.css", "margin-top", "100px")
                .should("have.css", "margin-bottom", "100px");
        });

    });

    describe("Phase 4: Select by state or pseudo-class", function () {

        it("use a state or pseudo-class to hide the underlines of links", function () {
            cy.get("td.td2")
                .should("have.css", "text-decoration", "none solid rgb(0, 0, 0)");
        });

    });

});
