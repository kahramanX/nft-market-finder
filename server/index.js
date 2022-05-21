const express = require("express");
const puppeteer = require("puppeteer");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://looksrare.org/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/569"
    );

    await page.screenshot({ path: "example.png" });

    console.log(page);

    await browser.close();
  })();
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
