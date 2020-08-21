describe ('A simple GET request', function() {

    const endpoint = '/employees';

    it('GET -- Successful GET request', () => {
        cy.request('GET', endpoint)
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.status).to.eq('success')
        });
    });
});