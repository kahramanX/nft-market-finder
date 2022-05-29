function SeeOnMarketPalaces() {
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
