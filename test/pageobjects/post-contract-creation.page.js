const Page = require('./page');

class PostContractCreationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get lblContractName () {
        return $('//h1');
    }

}

module.exports = new PostContractCreationPage();
