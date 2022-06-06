const Page = require('./page');

class LeftBarPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnCreateAContract () {
        return $('//a[@href="/create"]');
    }

    /**
     * Navigate to create a contract section
     */
    async navigateToCreateContract () {
        await this.btnCreateAContract.waitForDisplayed();
        await this.btnCreateAContract.click();
    }
}

module.exports = new LeftBarPage();
