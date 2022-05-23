const express = require("express");
const puppeteer = require("puppeteer");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var TOKEN = [];

app.get("/token/:contract/:tokenID", (req, res) => {
  var LRname = "first";
  var LRprice = "first";

  const looksRare = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(
        `https://looksrare.org/collections/${req.params.contract}/${req.params.tokenID}`
      );

      let LRprice = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-ppybwb > div.css-1nrd5m0 > div.css-1fl5oqd > h2",
        (el) => Number(el.textContent)
      );

      let LRname = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-1stlkl > h1",
        (el) => el.textContent
      );

      TOKEN.push({ LRprice, LRname, push: "push metodlu" });
      await browser.close();

      res.json(TOKEN);
    } catch (error) {
      console.log("===ERROR===");
      //console.log(error);
      console.log({
        LRprice: LRprice == "" ? "Unlisted" : LRprice,
        LRname: LRname,
      });
      TOKEN.push({ LRprice, LRname, push: "push metodlu" });
      res.json(TOKEN);
    }
  };

  looksRare();
  console.log(TOKEN);

  /*
  res.json({
    LRprice: LRprice ? LRprice : "Unlisted",
    LRname: LRname ? LRname : "Unlisted",
    zoooort: "test",
  }); */
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
