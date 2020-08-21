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
           body: this.data.postRequest
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            cy.writeFile('cypress/fixtures/response.json', {response})
            expect(response.body).to.not.be.null
            expect(response.body.status).to.eq('success')
            expect(response.body.data.name).to.eq(this.data.postRequest.name)
            expect(response.body.data.salary).to.eq(this.data.postRequest.salary)
            expect(response.body.data.age).to.eq(this.data.postRequest.age)
        });
    });
});
