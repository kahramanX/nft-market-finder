import SelectedNFTInfos from "./SelectedNFTInfos";
import SeeOnMarketPlaces from "./SeeOnMarketPlaces";

function GetNFTInfo() {
  return (
    <>
      <div className="input-container">
        <div className="inputs">
          <input
            className="get-contract"
            type="text"
            placeholder="Contract here"
          />
          <input
            className="get-token-id"
            type="text"
            placeholder="Token ID here"
          />
        </div>
        <div className="search-btn-container">
          <button>Search on marketplaces</button>
        </div>
      </div>
      <section className="NFT-info-section">
        <SelectedNFTInfos />
        <SeeOnMarketPlaces />
      </section>
    </>
  );
}

export default GetNFTInfo;
