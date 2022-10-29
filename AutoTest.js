const webDriver = require('selenium-webdriver');
const driver = new webDriver.Builder().forBrowser('firefox').build();
const By = webDriver.By;

(async function testRun() {
    await driver.get('https://google.com');
    const searchFild = driver.findElement(By.xpath('//input[@title="Поиск"]'));
    searchFild.sendKeys('Selenium');
    await driver.sleep(1000);
    searchFild.sendKeys(webDriver.Key.ENTER);
    await driver.sleep(3000);
    const results = await driver.findElements(By.xpath('//div[@class="MjjYud"]'));
    console.log('Количество результатов =', results.length);

    for(let element of results) {
        let text = await element.getText();
        console.log('---------------');
        console.log(text);
        console.log('---------------');
    }

        driver.close();
})();

// '//div[@class="g Ww4FFb vt6azd tF2Cxc"]'