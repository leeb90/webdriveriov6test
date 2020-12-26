const Page = require('./page');


class GooglePage extends Page {
    /**
     * define selectors using getter methods
     */
    get SearchBar () { return $('body input[title]') }
    get SearchButton () { return $$('body [jsname^="V"] input')[0] }
    get NavBar () { return $('body #top_nav') }
    get SearchElements () { return $$('body h3') }
    get ResultElement () { return $('#firstHeading') }
    get SuggestionBox () { return $('body [jscontroller^="tg8oTe"]') }
    get SuggestionElements () { return $$('body [class^="sbct"][role="presentation"]') }



    //Google home page search function, decides whether to use the Google search button or the suggestion list based on the buttonmethod
    //variable (bool)
    searchFunction (searchtext,buttonmethod,listposition) {

        this.SearchBar.setValue(searchtext);

        if (buttonmethod === true ){

            browser.waitUntil(() => {
                return this.SearchButton.isDisplayed()
            },"Google Search Button was not found on page");

            this.SearchButton.click();

        } else {

            browser.waitUntil(() => {
                return this.SuggestionBox.isDisplayed()
            },"Google Suggestion List was not found on page");

            this.SuggestionElements[listposition].click();
        }

            browser.waitUntil(() => {
                return this.NavBar.isDisplayed()
            },"Element was not found on search result page");

    }

    //Open url
    open () {
        return super.open('https://www.google.com/');
    }

    //function to click on any result from Google search page
    searchPageResults (searchindex){

        this.SearchElements[searchindex].click();

    }
}

module.exports = new GooglePage();