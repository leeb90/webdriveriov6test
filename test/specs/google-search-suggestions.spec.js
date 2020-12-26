const expect= require('chai').expect;
const GooglePage = require('../pageobjects/google.page');

describe('Google search using suggestions',()=>{
    it('should search on Google search field and redirect to search results page',()=>{
        GooglePage.open();

        GooglePage.searchFunction("The name of the w", false , 0)

        const Result = GooglePage.SearchElements[0].getText();

        expect(Result).to.equal("El nombre del viento - Wikipedia, la enciclopedia libre");

    });
    
    it('should check the first result link on the search results page',()=>{

        GooglePage.searchPageResults(0);

        const Result = GooglePage.ResultElement.getText();
    
        expect(Result).to.equal("El nombre del viento");
    

    });
});