const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/token/:chain/:contract/:tokenID", (req, res) => {
  var mainInfo = {
    contract: req.params.contract,
    tokenID: req.params.tokenID,
    chain: req.params.chain,
  };

  var TOKEN = [];

  console.log("CHAIN = " + req.params.chain);

  const looksRare = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(
        `https://looksrare.org/collections/${req.params.contract}/${req.params.tokenID}`,
        { waitUntil: "networkidle2" }
      );

      await page.waitForTimeout(5000);

      var name = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-1stlkl > h1",
        (el) => el.textContent
      );

      var url = await page.url();

      var imgUrl = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-gr2nf3 > div > div.css-wrvyyq > div > div.css-dr5tha > div.chakra-aspect-ratio.css-1d7b5tk > div > div > span > img",
        (el) => el.src
      );

      var price = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-ppybwb > div.css-1nrd5m0 > div.css-1fl5oqd > h2",
        (el) => Number(el.textContent)
      );

      TOKEN.push({
        marketplace: "LooksRare",
        name: name == undefined ? "page-not-found" : name,
        price: price == undefined ? "Unlisted" : price,
        url,
        imgUrl: imgUrl == undefined ? "page-not-found" : imgUrl,
        chain: req.params.chain,
      });

      await browser.close();
    } catch (error) {
      console.log("===ERROR===");
      //console.log(error);

      TOKEN.push({
        marketplace: "LooksRare",
        name: name == undefined ? "page-not-found" : name,
        price: price == undefined ? "Unlisted" : price,
        url,
        imgUrl: imgUrl == undefined ? "page-not-found" : imgUrl,
        chain: req.params.chain,
      });
    }
  };

  const NFTrade = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(
        `https://nftrade.com/assets/${req.params.chain}/${req.params.contract}/${req.params.tokenID}`
      );

      await page.waitForTimeout(5000);

      var url = await page.url();

      var name = await page.$eval(
        "#__next > div > main > div > div.layout_container__2Iyqc.assets_assetTokenBody__Q-deF > div.assets_assetTokenBodySectionHead__3CM9G > div.assets_assetTokenBodySectionHeadRow__GN36h > div.assets_assetTokenBodyDescription__2FnOC > div.assets_assetTokenBodyName__DYN8E",
        (el) => el.textContent
      );

      var imgUrl = await page.$eval(
        "#__next > div > main > div > div.layout_container__2Iyqc.assets_assetTokenBody__Q-deF > div.assets_assetTokenBodySectionHead__3CM9G > div.assets_assetTokenBodySectionHeadRow__GN36h > div:nth-child(1) > div > div.layout_clickable__1NzYc.assets_assetTokenBodyImageClickable__yhyNp.layout_clickableHover__2L9lf > img",
        (el) => el.src
      );

      var price = await page.$eval(
        "#__next > div > main > div > div.layout_container__2Iyqc.assets_assetTokenBody__Q-deF > div.assets_assetTokenBodySectionHead__3CM9G > div.assets_assetTokenBodySectionHeadRow__GN36h > div.assets_assetTokenBodyDescription__2FnOC > div.assets_assetTokenBodyPrice__3bgsY > div > b",
        (el) => el.textContent
      );

      TOKEN.push({
        marketplace: "NFTrade",
        name: name == undefined ? "page-not-found" : name,
        price: price == undefined ? "Unlisted" : price,
        url,
        imgUrl: imgUrl == undefined ? "page-not-found" : imgUrl,
        chain: req.params.chain,
      });

      await browser.close();
    } catch (error) {
      //console.log(error);
      console.log("===ERROR===");

      TOKEN.push({
        marketplace: "NFTrade",
        name: name == undefined ? "page-not-found" : name,
        price: price == undefined ? "Unlisted" : price,
        url,
        imgUrl: imgUrl == undefined ? "page-not-found" : imgUrl,
        chain: req.params.chain,
      });
    }
  };

  const rarible = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(
        `https://rarible.com/token/${req.params.contract}:${req.params.tokenID}?tab=details`
      );

      await page.waitForTimeout(5000);

      var url = await page.url();

      var name = await page.$eval(
        "#root .sc-bdvvtL.sc-hKwDye.sc-eCImPb.sc-kOJRsK.cUywCO.lpnvpQ",
        (el) => el.textContent
      );

      var imgUrl = await page.$eval(
        "#root .sc-bdvvtL.sc-ikJyIC.sc-jJoQJp.cJszuA.gXrHpT.sc-kmQMED.bwToMy",
        (el) => el.src
      );

      var price = await page.$eval(
        "#root .sc-bdvvtL.sc-hKwDye.sc-eCImPb.klyGzw",
        (el) => el.dataset.price
      );

      TOKEN.push({
        marketplace: "Rarible",
        name: name == undefined ? "page-not-found" : name,
        price: price == undefined ? "Unlisted" : price,
        url,
        imgUrl: imgUrl == undefined ? "page-not-found" : imgUrl,
        chain: req.params.chain,
      });
      //  console.log(TOKEN.length);
      var General = [{ TOKEN, mainInfo }];

      //   res.json(General);
      await browser.close();
    } catch (error) {
      console.log("===ERROR===");
      //console.log(error);

      TOKEN.push({
        marketplace: "Rarible",
        name: name == undefined ? "page-not-found" : name,
        price: price == undefined ? "Unlisted" : price,
        url,
        imgUrl: imgUrl == undefined ? "page-not-found" : imgUrl,
        chain: req.params.chain,
      });
      // console.log(TOKEN.length);
      var General = [{ TOKEN, mainInfo }];

      //   res.json(General);
    }
  };

  const niftyGateway = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(
        `https://niftygateway.com/marketplace/item/${req.params.contract}/${req.params.tokenID}`
      );

      await page.waitForTimeout(5000);

      await page.evaluate(() => {
        localStorage.setItem(
          "preferences",
          JSON.stringify({ displayCurrency: "ETH" })
        );
      });
      //      await page.waitForTimeout(5000);

      var url = await page.url();

      var name = await page.$eval(
        "#root > div > div.MuiBox-root.css-ne2sxb > div > div > div:nth-child(2) > div.MuiBox-root.css-1vnjyhs > h3",
        (el) => el.textContent
      );

      var imgUrl = await page.$eval(
        "#root > div > div.MuiBox-root.css-ne2sxb > div > div > div:nth-child(1) > div > div > div > div > img:last-child",
        (el) => el.src
      );

      var price = await page.$eval(
        "#root > div > div.MuiBox-root.css-ne2sxb > div > div > div:nth-child(2) > div.MuiBox-root.css-lbown3 > div > a > span > span:nth-child(2)",
        (el) => el.textContent
      );

      // undefined == page-not-found && Unlisted
      TOKEN.push({
        marketplace: "NiftyGateWay",
        name: name == undefined ? "page-not-found" : name,
        price: price == undefined ? "Unlisted" : price,
        url,
        imgUrl: imgUrl == undefined ? "page-not-found" : imgUrl,
        chain: req.params.chain,
      });

      //  TOKEN.push(general);

      await browser.close();

      console.log(TOKEN);
      console.log(TOKEN.length);

      var General = [{ TOKEN, mainInfo }];

      res.json(General);
    } catch (error) {
      console.log("===ERROR===");
      //console.log(error);

      // undefined == page-not-found && Unlisted
      TOKEN.push({
        marketplace: "NiftyGateWay",
        name: name == undefined ? "page-not-found" : name,
        price: price == undefined ? "Unlisted" : price,
        url,
        imgUrl: imgUrl == undefined ? "page-not-found" : imgUrl,
        chain: req.params.chain,
      });

      // TOKEN.push(general);

      console.log(TOKEN);
      console.log(TOKEN.length);

      var General = [{ TOKEN, mainInfo }];

      res.json(General);
    }
  };

  // Pulling NFT information
  looksRare();
  NFTrade();
  rarible();
  niftyGateway();
});

app.post("/token/:chain/:contract/:tokenID", (req, res) => {
  console.log("=====post=====");
  console.log(req.body);
  console.log(req.url);

  res.redirect(
    `http://localhost:3000/token/${req.body.chain}/${req.body.contract}/${req.body.tokenID}`
  );
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
