const puppeteer = require('puppeteer');
const URL = 'https://nb.meituan.com/s/%E7%81%AB%E9%94%85/';

(async () => {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/google-chrome'});
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.goto(URL);

  const nameItems = await page.$$eval('.default-list-item .list-item-desc-top', 
    nameLinks => nameLinks.map(nameLink => `${nameLink.querySelector('a:first-child').textContent} 
    ${nameLink.querySelector('.avg-price').textContent}`))

  console.log(nameItems); 

  await page.screenshot({path: 'screenshot.png'});
  await browser.close();
})();