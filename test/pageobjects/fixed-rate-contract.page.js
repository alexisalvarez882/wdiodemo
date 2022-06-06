const Page = require('./page');
const PostContractCreationPage = require('../pageobjects/post-contract-creation.page');

class FixedRateContractPage extends Page {
    /**
     * define selectors using getter methods
     */
    /*General information*/
    get inputContractName () {
        return $('//input[@name="name"]');
    }
    get dropdownContractorTaxResidence () {
        return $('(//div[@data-qa="contractor-tax-residence"])[1]');
    }
    get inputJobTitle () {
        return $('//input[@name="jobTitle"]');
    }
    get dropdownSeniorityLevel () {
        return $('//div[@data-qa="selector-seniority-level"]');
    }
    get textareaScopeOfWork () {
        return $('//textarea[@name="scope"]');
    } 
    get datepickerContractorStartDate () {
        return $('//input[@name="effectiveDate"]');
    }
    /*Payments Details*/
    get inputPaymentRate () {
        return $('//input[@name="rate"]');
    }
    get dropdownCurrency () {
        return $('//div[@data-qa="currency-select"]');
    }
    get dropdownPaymentFrequency () {
        return $('(//div[@data-qa="cycle-select"])[1]');
    }
    /*Benefits and Extras*/
    get btnSpecialClause () {
        return $('//button[@data-qa="add-a-special-clause"]');
    }
    get textareaSpecialClause () {
        return $('//div[@data-qa="special-clause-card"]//textarea');
    }
    /*Compliance*/
    get btnCreateContract () {
        return $('//button[@data-qa="create-contract"]');
    }

    get btnNext () {
        return $('//button[@data-qa="next"]');
    }

     /**
     * full fill fixed rate contract
     */
      async fullFillContract (name, taxResidence, jobTitle, seniorityLevel, scopeOfWork, startDate, currency, paymentRate, 
        paymentFrequency, specialClause) {
        /*General information*/
        await this.inputContractName.setValue(name);
        await this.dropdownContractorTaxResidence.setValue(taxResidence);
        await this.jobTitle.setValue(jobTitle);
        await this.dropdownSeniorityLevel.setValue(seniorityLevel);
        await this.textareaScopeOfWork.setValue(scopeOfWork);
        await this.datepickerContractorStartDate.setValue(startDate);
        await this.btnNext.click();
        /*Payments Details*/
        await this.dropdownCurrency.setValue(currency);
        await this.inputPaymentRate.setValue(paymentRate);
        await this.paymentFrequency.setValue(paymentFrequency);
        await this.btnNext.click();
        /* Define Dates*/
        await this.btnNext.click();
        /*Benefits and Extras*/
        await this.btnSpecialClause.click();
        await this.textareaSpecialClause.setValue(specialClause);
        await this.btnNext.click()
        /*Compliance*/
        await this.btnCreateContract.click();
        return PostContractCreationPage.lblContractName.waitForDisplayed() && PostContractCreationPage.lblContractName.getText() === name; 
    }

}

module.exports = new FixedRateContractPage();
