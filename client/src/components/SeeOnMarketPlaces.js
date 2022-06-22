import { useSelector } from "react-redux";

function SeeOnMarketPalaces() {
  const { nftInfos } = useSelector((state) => state.site);

  return (
    <div className="see-NFT-on-marketplaces">
      <div className="market-title">Which marketplaces is it listed on?</div>
      <div className="nft-list-desc">
        <span>Market</span>
        <span>Price</span>
        <span>In market?</span>
      </div>
      <div className="markets-container">
        {nftInfos.map((nft, index) => {
          return (
            <a key={index} href={nft.url} className="market">
              <span className="market-name">{nft.marketplace}</span>
              <span className="market-price">
                {nft.price === "Unlisted" ? "Unlisted" : nft.price}
              </span>
              <span className="is-listed">
                {nft.imgUrl === "page-not-found" ? "❌" : "✅"}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SeeOnMarketPalaces;
