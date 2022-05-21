//Components
import SelectedNFTInfos from "./SelectedNFTInfos";
import SeeOnMarketPlaces from "./SeeOnMarketPlaces";

//Redux
import { useDispatch } from "react-redux";
import {
  setContract,
  setTokenId,
  setNetworkName,
} from "../features/nftInfoSlice";

function GetNFTInfo() {
  const dispatch = useDispatch();

  function handleButton() {
    console.log("tıklandı");
  }

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
          <select
            onChange={(e) => dispatch(setNetworkName(e.target.value))}
            className="select-network"
          >
            <option selected disabled>
              select...
            </option>
            <option>Avalanche</option>
            <option>BNB</option>
            <option>Ethereum</option>
            <option>Polygon</option>
            <option>Solana</option>
          </select>
        </div>
        <div className="search-btn-container">
          <button onClick={(e) => handleButton(e)}>
            Search on marketplaces 👀
          </button>
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
