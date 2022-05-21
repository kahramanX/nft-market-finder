//Components
import SelectedNFTInfos from "./SelectedNFTInfos";
import SeeOnMarketPlaces from "./SeeOnMarketPlaces";

//Redux
import { useDispatch } from "react-redux";
import { setContract, setTokenId } from "../features/nftInfoSlice";

function GetNFTInfo() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="input-container">
        <div className="inputs">
          <input
            onChange={(e) => dispatch(setContract(e.target.value))}
            className="get-contract"
            type="text"
            placeholder="Contract here"
          />
          <input
            onChange={(e) => dispatch(setTokenId(e.target.value))}
            className="get-token-id"
            type="text"
            placeholder="Token ID here"
          />
        </div>
        <div className="search-btn-container">
          <button>Search on marketplaces 👀</button>
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
