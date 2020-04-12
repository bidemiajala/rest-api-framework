describe ("A simple DELETE request", function() {

    //Endpoint for this suite
    const endpoint = "/delete/80";

    it("GET -- Successful DELETE request", () => {
        cy.request("DELETE", endpoint) //Overrides Cypress' default check for 
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.status).to.eq("failed")
            expect(response.body.message).to.eq("Error! Not able to delete record")
        });
    });
});