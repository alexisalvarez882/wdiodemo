const LoginPage = require('../../pageobjects/login.page');
const Users = require('../../test-data/testusers.json');
const LeftBarPage = require('../../pageobjects/leftbar.page');
const CreateContractPage = require('../../pageobjects/create-contract.page');
const FixedRateContractPage = require('../../pageobjects/fixed-rate-contract.page');

const emailAddress = Users.users[0].emailAddress;
const password = Users.users[0].password;

describe('[ID-1] Create Fixed Rate contract', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        expect(await LoginPage.login(emailAddress, password)).toBe(true);
    });

    it('should navigate to Fixed Rate contract creation', async () => {
        await LeftBarPage.navigateToCreateContract();
        expect(await CreateContractPage.navigateToFixedRateContract()).toBe(true);
    });

    it('should full fill Fixed Rate contract', async () => {
        expect(FixedRateContractPage.fullFillContract('Alexis', 'Uruguay', 'QA Engineer', 'Senior', 
        'This is a test', 'Today', 'GBP - British Pound', '1', 'Week', 'This is a test')).toBe(true);
    });
});


