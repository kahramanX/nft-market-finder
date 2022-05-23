import { useEffect, useState } from "react";
import axios from "axios";

function SeeOnMarketPalaces() {
  useEffect(() => {
    axios
      .get(`http://localhost:3001${window.location.pathname}`, {
        mode: "no-cors",
      })
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="see-NFT-on-marketplaces">
      <h3>Which marketplaces is it listed on?</h3>
      <ul>
        <li>Opensea </li>
        <li>Rarible </li>
      </ul>
    </div>
  );
}

export default SeeOnMarketPalaces;
