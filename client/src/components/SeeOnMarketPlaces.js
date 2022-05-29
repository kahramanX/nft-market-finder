import { useEffect } from "react";
import axios from "axios";

function SeeOnMarketPalaces() {
  useEffect(() => {
    console.log(window.location.pathname.includes("0x"));
    if (window.location.pathname.length > 10) {
      axios
        .get(`http://localhost:3001${window.location.pathname}`, {
          mode: "no-cors",
        })
        .then((res) => console.log(res.data));
    }
  }, []);

  return (
    <div className="see-NFT-on-marketplaces">
      <div className="market-title">Which marketplaces is it listed on?</div>
      <div className="markets-container">
        <a href="1" className="market">
          <span className="market-name">Opensea</span>
          <span className="market-price">20.4</span>
          <span className="is-listed">✅</span>
        </a>

        <a href="1" className="market">
          <span className="market-name">Opensea</span>
          <span className="market-price"></span>
          <span className="is-listed">❌</span>
        </a>
        <a href="1" className="market">
          <span className="market-name">Rarible</span>
          <span className="market-price">21</span>
          <span className="is-listed">✅</span>
        </a>
      </div>
    </div>
  );
}

export default SeeOnMarketPalaces;
