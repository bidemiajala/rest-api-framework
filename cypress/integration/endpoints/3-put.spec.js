describe ("A simple PUT request", function() {


    before( () => {
        cy.fixture('payloads').then( (data) => {
            this.data = data
        });
    });

    const endpoint = "/update/86"

    it("PUT -- Successful PUT request", () => {
        cy.request({
           method: "PUT", 
           url: endpoint,
           body: this.data.putRequest
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.status).to.eq("success")
        });
    });
});