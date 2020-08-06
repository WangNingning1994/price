const puppeteer = require('puppeteer');
const URL = 'https://nb.meituan.com';

(async () => {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/google-chrome'});
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.goto(URL);
  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
})();