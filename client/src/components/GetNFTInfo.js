//Components
import SelectedNFTInfos from "./SelectedNFTInfos";
import SeeOnMarketPlaces from "./SeeOnMarketPlaces";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setContract,
  setTokenId,
  setNetworkName,
} from "../features/nftInfoSlice";

function GetNFTInfo() {
  const dispatch = useDispatch();
  const { contract, tokenId } = useSelector((state) => state.nftInfos);
  function handleButton() {
    console.log("tıklandı");
  }

  return (
    <>
      <div className="input-container">
        <form
          action={`http://localhost:3001/token/${contract}/${tokenId}`}
          method="POST"
        >
          <div className="inputs">
            <input
              name="contract"
              onChange={(e) => dispatch(setContract(e.target.value))}
              className="get-contract"
              type="text"
              placeholder="Contract here"
            />
            <input
              name="tokenID"
              onChange={(e) => dispatch(setTokenId(e.target.value))}
              className="get-token-id"
              type="text"
              placeholder="Token ID here"
            />
            <select
              name="chain"
              onChange={(e) => dispatch(setNetworkName(e.target.value))}
              className="select-network"
              defaultValue={"default"}
            >
              <option value={"default"} disabled>
                select...
              </option>
              <option value={"avalanche"}>Avalanche</option>
              <option value={"bsc"}>BNB</option>
              <option value={"eth"}>Ethereum</option>
              <option value={"polygon"}>Polygon</option>
              <option value={"sol"}>Solana</option>
            </select>
          </div>
          <div className="search-btn-container">
            <button type="submit" onSubmit={(e) => handleButton(e)}>
              Search on marketplaces 👀
            </button>
          </div>
        </form>
      </div>
      <section className="NFT-info-section">
        <SelectedNFTInfos />
        <SeeOnMarketPlaces />
      </section>
    </>
  );
}

export default GetNFTInfo;
