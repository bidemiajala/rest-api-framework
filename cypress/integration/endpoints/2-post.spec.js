describe ('A simple POST request', function() {

    const endpoint = '/create';

    before( () => {
        cy.fixture('payloads').then( (data) => {
            this.data = data
        });
    });

    it('POST -- Successful POST request', () => {
        cy.request({
           method: 'POST', 
           url: endpoint,
           failOnStatusCode: false,
           body: this.data.postRequest
        })
        .then((response) => {
            expect(response.status).to.eq(406)
            cy.writeFile('cypress/fixtures/response.json', {response})
            expect(response.body).to.not.be.null;
        });
    });
});
