// Авторизация
const webDriver = require('selenium-webdriver');
const driver = new webDriver.Builder().forBrowser('firefox').build();
const By = webDriver.By;

(async function testRun() {
    await driver.get('https://try.vikunja.io/login');
    const searchFild = driver.findElement(By.xpath('//input[@id="username"]'));
    searchFild.sendKeys('demo');
    await driver.sleep(1000);
    const searchFild2 = driver.findElement(By.xpath('//input[@id="password"]'));
    searchFild2.sendKeys('demo');
    await driver.sleep(1000);

    // Нажатие на ENTER
    // searchFild.sendKeys(webDriver.Key.ENTER);
    // await driver.sleep(3000);
    
    // Нажатие на кнопку Войти
    const searchFild3 = driver.findElement(By.xpath('//button[@class="base-button base-button--type-button button is-primary"]'));
    await searchFild3.click()

        // driver.close();
})();
