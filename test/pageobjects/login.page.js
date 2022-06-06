const Page = require('./page');
const HomePage = require('../pageobjects/home.page');

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmailAddress () {
        return $('//input[@name="email"]');
    }

    get inputPassword () {
        return $('//input[@name="password"]');
    }

    get btnLogIn () {
        return $('//button[@type="submit"]');
    }

    /**
     * login using email address and password
     */
    async login (username, password) {
        await this.inputEmailAddress.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogIn.click();
        return HomePage.lblGoodAfternoon.waitForDisplayed();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
