const express = require("express");
const puppeteer = require("puppeteer");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var TOKEN = [];

app.get("/token/:contract/:tokenID", (req, res) => {
  const looksRare = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(
        `https://looksrare.org/collections/${req.params.contract}/${req.params.tokenID}`
      );

      var name = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-1stlkl > h1",
        (el) => el.textContent
      );

      var price = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-ppybwb > div.css-1nrd5m0 > div.css-1fl5oqd > h2",
        (el) => Number(el.textContent)
      );

      TOKEN.push({
        marketplace: "LooksRare",
        name,
        price,
        chain: "eth",
        push: "push metodlu",
      });

      await browser.close();

      console.log(TOKEN);
      res.json(TOKEN);
    } catch (error) {
      console.log("===ERROR===");
      //console.log(error);

      TOKEN.push({
        marketplace: "LooksRare",
        name,
        price: price == undefined ? "Unlisted" : price,
        chain: "eth",
        push: "push metodlu",
      });
      console.log(TOKEN);
      // res.json(TOKEN);
    }
  };

  const NFTrade = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(
        `https://nftrade.com/assets/eth/${req.params.contract}/${req.params.tokenID}`
      );

      var price = await page.$eval(
        "#__next > div > main > div > div.layout_container__2Iyqc.assets_assetTokenBody__Q-deF > div.assets_assetTokenBodySectionHead__3CM9G > div.assets_assetTokenBodySectionHeadRow__GN36h > div.assets_assetTokenBodyDescription__2FnOC > div.assets_assetTokenBodyPrice__3bgsY > div > b",
        (el) => el.textContent
      );

      var name = await page.$eval(
        "#__next > div > main > div > div.layout_container__2Iyqc.assets_assetTokenBody__Q-deF > div.assets_assetTokenBodySectionHead__3CM9G > div.assets_assetTokenBodySectionHeadRow__GN36h > div.assets_assetTokenBodyDescription__2FnOC > div.assets_assetTokenBodyName__DYN8E",
        (el) => el.textContent
      );

      console.log(name);

      TOKEN.push({
        marketplace: "NFTrade",
        name,
        price,
        chain: "eth",
        push: "push metodlu",
      });

      await browser.close();

      console.log(TOKEN);
      res.json(TOKEN);
    } catch (error) {
      //console.log(error);
      console.log("===ERROR===");

      TOKEN.push({
        marketplace: "NFTrade",
        name,
        price: price == undefined ? "Unlisted" : price,
        chain: "eth",
        push: "push metodlu",
      });
      console.log(TOKEN);
      // res.json(TOKEN);s
    }
  };

  looksRare();
  NFTrade();
  //console.log(TOKEN);
  console.log(TOKEN.length);
  if (TOKEN.length == 2) {
    res.json(TOKEN);
  }

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
