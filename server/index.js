const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/token/:chain/:contract/:tokenid", (req, res) => {
  var mainInfo = {
    contract: req.params.contract,
    tokenID: req.params.tokenid,
    chain: req.params.chain,
  };

  var TOKEN = [];

  console.log("CHAIN = " + req.params.chain);

  const looksRare = async () => {
    const browser = await puppeteer.launch();

    try {
      const page = await browser.newPage();

      await page.goto(
        `https://looksrare.org/collections/${req.params.contract}/${req.params.tokenid}`,
        { waitUntil: "networkidle2" }
      );

      await page.waitForTimeout(5000);

      var url = await page.url();

      var name = await page.$eval(
        "#__next > div.css-9nfnvx > div > div > div > div > div.css-m9jvpx > div.css-81whtp > div.css-1stlkl > h1",
        (el) => el.textContent
      );

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
    } finally {
      await browser.close();
    }
  };

  const NFTrade = async () => {
    const browser = await puppeteer.launch();

    try {
      const page = await browser.newPage();
      await page.goto(
        `https://nftrade.com/assets/${req.params.chain}/${req.params.contract}/${req.params.tokenid}`
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
    } finally {
      await browser.close();
    }
  };

  const rarible = async () => {
    const browser = await puppeteer.launch();

    try {
      const page = await browser.newPage();
      await page.goto(
        `https://rarible.com/token/${req.params.contract}:${req.params.tokenid}?tab=details`
      );

      await page.waitForTimeout(5000);

      var url = await page.url();

      var name = await page.$eval(
        "#root > div > div > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.sc-eCImPb.bHmTqV.fEuCYr.dKkoen > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.sc-gCEpsI.qfAKJ.fEuCYr.iBRzGw > div > div.ScrollbarsCustom-Wrapper > div > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.iEQkDj.fEuCYr > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.sc-gKclnd.qfAKJ.fEuCYr.hLmGHV > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.sc-fpGCtG.qfAKJ.fEuCYr.haMfJG > h1",
        (el) => el.textContent
      );

      console.log(name);

      var imgUrl = await page.$eval(
        "#root > div > div > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.sc-eCImPb.bHmTqV.fEuCYr.dKkoen > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.iVtJMV.fEuCYr.sc-hatQeL.jVevMa > div > img",
        (el) => el.src
      );
      console.log(imgUrl);

      var price = await page.$eval(
        "#root > div > div > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.sc-eCImPb.bHmTqV.fEuCYr.dKkoen > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.sc-gCEpsI.qfAKJ.fEuCYr.iBRzGw > div > div.ScrollbarsCustom-Wrapper > div > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.iEQkDj.fEuCYr > div > div.sc-bdvvtL.sc-gsDKAQ.sc-dkPtRN.sc-gKclnd.qfAKJ.fEuCYr.hLmGHV > span > span > span.sc-bdvvtL.sc-iCfMLu.sc-furwcr.sc-eWfVMQ.bqAIdn.fNRzXp > span > span:nth-child(1)",
        (el) => el.textContent
      );

      console.log(price);

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
    } finally {
      await browser.close();
    }
  };

  const niftyGateway = async () => {
    const browser = await puppeteer.launch();

    try {
      const page = await browser.newPage();
      await page.goto(
        `https://niftygateway.com/marketplace/item/${req.params.contract}/${req.params.tokenid}`
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
    } finally {
      await browser.close();
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
    `http://localhost:3000/token/${req.body.chain}/${req.body.contract}/${req.body.tokenid}`
  );
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
