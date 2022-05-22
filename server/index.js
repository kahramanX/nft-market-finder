const express = require("express");
const puppeteer = require("puppeteer");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/token/:contract/:tokenID", (req, res) => {
  var TOKEN = [];

  const marketplaces = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(
        `https://looksrare.org/collections/${req.params.contract}/${req.params.tokenID}#offers`
      );

      var LRname = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-1stlkl > h1",
        (el) => el.textContent
      );

      var LRprice = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-ppybwb > div.css-1nrd5m0 > div.css-1fl5oqd > h2",
        (el) => el.textContent
      );

      console.log({ LRprice, LRname });

      await browser.close();
      res.json({ LRprice, LRname });
    } catch (error) {
      //console.log(error);
      console.log({ LRprice, LRname });
      res.json({ LRprice: LRprice ? LRprice : "Unlisted", LRname: LRname });
    }
  };

  marketplaces();
});

app.post("/token/:contract/:tokenID", (req, res) => {
  console.log("=====post=====");
  console.log(req.body);
  console.log(req.url);

  res.redirect(
    `http://localhost:3000/token/${req.body.contract}/${req.body.tokenID}`
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
