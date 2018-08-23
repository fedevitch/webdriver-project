const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://app-dev.classwallet.com/login');
    await driver.findElement(By.id('email')).sendKeys('teacher@cw.com');
    await driver.findElement(By.id('password')).sendKeys('password');
    await driver.findElement(By.className('login-action')).click();

    await driver.wait(until.titleIs('Home'), 5000);

    //await driver.findElement(By.xpath("//button[@data-reactid='.0.0.0.2.0.0.$2.1.0.0.0']")).click();


let label = "Funds Received";
await driver.findElement(By.xpath("//span[contains(.,'" + label + "')]")).click();

//await driver.wait(1000);

await driver.findElement(By.id('search')).sendKeys('testtesttest');

await driver.close();
  } 
catch(e) {

console.log("ERROR");
console.log(e);

}
finally {
    await driver.quit();
  } 
})();

