describe ('A simple DELETE request', function() {

    const endpoint = '/delete/80';

    it('GET -- Successful DELETE request', () => {
        cy.request('DELETE', endpoint)
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.status).to.eq('success')
            expect(response.body.message).to.eq('Successfully! Record has been deleted')
        });
    });
});
