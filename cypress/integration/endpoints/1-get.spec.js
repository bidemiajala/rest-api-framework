describe ("A simple GET request", function() {

    //Endpoint for this suite
    const endpoint = "/employees";

    //The GET request should return the response asserted below
    it("GET -- Successful GET request", () => {
        cy.request("GET", endpoint)
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.status).to.eq("success")
        });
    });
});