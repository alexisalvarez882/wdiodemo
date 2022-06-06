const Page = require('./page');
const FixedRateContractPage = require('../pageobjects/fixed-rate-contract.page');

class CreateContractPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnFixedRate () {
        return $('//a[@href="/create/fixed"]');
    }

    async navigateToFixedRateContract () {
        this.btnFixedRate.waitForDisplayed();
        this.btnFixedRate.click();
        return FixedRateContractPage.inputContractName.waitForDisplayed();
    }
}

module.exports = new CreateContractPage();
