const Page = require('./page');

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get lblGoodAfternoon () {
        return $('//h1[contains(text(),"Good afternoon,")]');
    }
}

module.exports = new HomePage();
