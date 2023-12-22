describe("CSS for Colors, Borders, and Shadows", function () {

    before(function () {
        cy.visit("index.html");
    });

    describe("Phase 1: Borders", function () {

        it("Box 1 has a border with a width of 5px, blue, solid", function () {
            cy.get(".box1")
                .should("have.css", "border", "5px solid rgb(0, 0, 255)");
        });

        it("Box 2 has a border that is dotted, red, width of 2px, rounded by 5px", function () {
            cy.get(".box2")
                .should("have.css", "border", "2px dotted rgb(255, 0, 0)")
                .should("have.css", "border-radius", "5px");
        });

    });

    describe("Phase 2: Colors", function () {

        it("Text 1 has a color of #FFC300", function () {
            cy.get(".text1")
                .should("have.css", "color", "rgb(255, 195, 0)");
        });

        it("Text 2 has a color of rgb(235, 62, 71)", function () {
            cy.get(".text2")
                .should("have.css", "color", "rgb(235, 62, 71)");
        });

    });

    describe("Phase 3: Opacity", function () {

        it("Box 3 has opacity of 0.6", function () {
            cy.get(".box3")
                .should("have.css", "background-color", "rgba(230, 230, 250, 0.6)");
        });

        it("h2 text has an opacity of 0.5", function () {
            cy.get("h2")
                .should("have.css", "opacity", "0.5");
        });

    });

    describe("Phase 4: Shadows", function () {

        it("Box 5 has the specified box shadow", function () {
            cy.get(".box5")
                .should("have.css", "border", "0px none rgb(0, 0, 0)")
                .should("have.css", "box-shadow", "rgb(0, 128, 128) 8px 20px 15px 0px");
        });

        it("Box 6 has the specified box shadow", function () {
            cy.get(".box6")
                .should("have.css", "border", "0px none rgb(0, 0, 0)")
                .should("have.css", "box-shadow", "rgb(128, 0, 0) 5px -10px 0px 0px");
        });

    });

});
