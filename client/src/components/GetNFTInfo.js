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
            defaultValue={"default"}
          >
            <option value={"default"} selected disabled>
              select...
            </option>
            <option value={"Avalanche"}>Avalanche</option>
            <option value={"BNB"}>BNB</option>
            <option value={"Ethereum"}>Ethereum</option>
            <option value={"Polygon"}>Polygon</option>
            <option value={"Solana"}>Solana</option>
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
